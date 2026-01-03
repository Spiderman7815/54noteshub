'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, PlusCircle, Trash2, Percent } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const courseSchema = z.object({
  credits: z.coerce.number().min(0.5, "Credits must be > 0").max(10, "Credits must be <= 10"),
  grade: z.coerce.number().min(0, "Grade must be >= 0").max(10, "Grade must be <= 10"),
});

const formSchema = z.object({
  courses: z.array(courseSchema).nonempty("Please add at least one course."),
});

export default function GpaCalculatorPage() {
  const [cgpa, setCgpa] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courses: [{ credits: 3, grade: 8.5 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'courses',
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const totalCredits = values.courses.reduce((acc, course) => acc + course.credits, 0);
    const weightedSum = values.courses.reduce((acc, course) => acc + course.credits * course.grade, 0);

    if (totalCredits === 0) {
      setCgpa(0);
      return;
    }

    const calculatedCgpa = weightedSum / totalCredits;
    setCgpa(calculatedCgpa);
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="space-y-8">
        <div className="text-center">
          <Calculator className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            CGPA Calculator
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            An essential tool for every student to calculate their Cumulative Grade Point Average accurately.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Calculate Your CGPA</CardTitle>
            <CardDescription>Enter the credits and grade points for each course to calculate your CGPA.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {fields.map((field, index) => (
                  <div key={field.id} className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto] items-start">
                     <FormField
                        control={form.control}
                        name={`courses.${index}.credits`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Credits</FormLabel>
                            <FormControl>
                              <Input type="number" step="0.5" placeholder="e.g., 3" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`courses.${index}.grade`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Grade Point</FormLabel>
                            <FormControl>
                              <Input type="number" step="0.1" placeholder="e.g., 8.5" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => remove(index)}
                        className="mt-8"
                        aria-label="Remove course"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                  </div>
                ))}
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => append({ credits: 3, grade: 0 })}
                  className="w-full"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Course
                </Button>

                <Separator />
                
                <Button type="submit" className="w-full">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate CGPA
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {cgpa !== null && (
          <Card>
            <CardHeader>
              <CardTitle>Your Result</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">Your Calculated CGPA is:</p>
              <p className="font-headline text-5xl font-bold text-primary my-2">
                {cgpa.toFixed(2)}
              </p>
               <div className="mt-4 rounded-lg border bg-accent/50 p-4">
                  <div className="flex items-center justify-center">
                     <Percent className="h-5 w-5 text-muted-foreground mr-2" />
                     <p className="font-semibold">Equivalent Percentage:</p>
                  </div>
                  <p className="text-2xl font-bold mt-1">
                    {(cgpa * 9.5).toFixed(2)}%
                  </p>
                   <p className="text-xs text-muted-foreground mt-1">(Calculated as CGPA &times; 9.5, a common conversion factor)</p>
               </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
