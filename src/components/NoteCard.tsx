import type { Note } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, Folder } from 'lucide-react';
import Link from 'next/link';

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  const previewLink = note.isFolder
    ? `https://drive.google.com/drive/folders/${note.driveId}`
    : `https://drive.google.com/file/d/${note.driveId}/view`;
  
  const downloadLink = `https://drive.google.com/uc?export=download&id=${note.driveId}`;

  return (
    <Card className="transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <CardDescription>{note.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="secondary">
            <Link href={previewLink} target="_blank" rel="noopener noreferrer">
              {note.isFolder ? <Folder className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
              {note.isFolder ? 'Open Folder' : 'Preview in Drive'}
            </Link>
          </Button>
          {!note.isFolder && (
            <Button asChild>
              <Link href={downloadLink} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
