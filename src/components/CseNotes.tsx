'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import type { Note } from '@/lib/data';
import { NoteCard } from './NoteCard';

interface CseNotesProps {
  notes: Note[];
}

export function CseNotes({ notes }: CseNotesProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return notes;

    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.description.toLowerCase().includes(query)
    );
  }, [searchQuery, notes]);

  return (
    <div className="space-y-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by subject name or keyword..."
          className="w-full rounded-full bg-card py-6 pl-12 pr-4 text-base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-card p-12 text-center">
            <h3 className="text-xl font-semibold tracking-tight">No notes found</h3>
            <p className="mt-2 text-muted-foreground">
                Your search for &quot;{searchQuery}&quot; did not match any notes. Try a different keyword.
            </p>
        </div>
      )}
    </div>
  );
}
