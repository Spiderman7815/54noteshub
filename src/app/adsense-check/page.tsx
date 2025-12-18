'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { adsenseComplianceCheck, AdSenseComplianceCheckOutput } from '@/ai/flows/adsense-compliance-check';
import { Bot, CheckCircle, Loader2, ListChecks, XCircle } from 'lucide-react';
import type { Metadata } from 'next';

// This would typically be in layout, but for a single page component we can define it here.
// export const metadata: Metadata = {
//   title: 'AdSense Compliance Checker',
//   description: 'Check if your HTML content is compliant with Google AdSense policies.',
// };

const formSchema = z.object({
  htmlContent: z.string().min(50, {
    message: 'HTML content must be at least 50 characters.',
  }),
});

export default function AdsenseCheckPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<AdSenseComplianceCheckOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      htmlContent: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setResult(null);
    try {
      const complianceResult = await adsenseComplianceCheck({ htmlContent: values.htmlContent });
      setResult(complianceResult);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: 'An error occurred while checking for compliance. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="space-y-8">
        <div className="text-center">
            <Bot className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                AdSense Compliance Checker
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Paste your page's HTML to get AI-powered compliance recommendations.
            </p>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle>Check HTML Content</CardTitle>
                <CardDescription>Enter the full HTML content of a page to analyze it for AdSense compliance.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="htmlContent"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>HTML Content</FormLabel>
                        <FormControl>
                            <Textarea
                            placeholder="<html>...</html>"
                            className="min-h-[250px] font-code"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                       <ListChecks className="mr-2 h-4 w-4" />
                    )}
                    Analyze Content
                    </Button>
                </form>
                </Form>
            </CardContent>
        </Card>
        
        {result && (
          <Card>
            <CardHeader>
              <CardTitle>Analysis Result</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert variant={result.isCompliant ? 'default' : 'destructive'}>
                {result.isCompliant ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                <AlertTitle>{result.isCompliant ? 'Likely Compliant' : 'Potential Issues Found'}</AlertTitle>
                <AlertDescription>
                  {result.isCompliant
                    ? 'The provided content appears to be compliant with AdSense policies.'
                    : 'The provided content may have issues that could affect AdSense approval.'}
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Recommendations</h3>
                {result.recommendations.length > 0 ? (
                  <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {result.recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">No specific recommendations. The content looks good.</p>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
