"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/store/hooks";
import { songAdded, type QueueItem } from "@/store/slices/queueSlice";
import { formatDuration } from "@/lib/format-duration";
import { mockSearchResults } from "@/mocks/search";
import { nanoid } from "nanoid";

export function SongSearch() {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<QueueItem[]>(mockSearchResults);

  // call the /api/search proxy with `query` (backend), then setResults with
  // the songs it returns. Handle the loading and "no results" states too.
  function searchSongs() {}

  function addSong(song: QueueItem) {
    const id = nanoid();
    dispatch(songAdded({ ...song, id }));
  }

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchSongs();
        }}
        className="flex gap-2"
      >
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a song"
        />
        <Button type="submit" size="icon" disabled={query.trim() === ""}>
          <Search className="h-4 w-4" />
        </Button>
      </form>

      {results.map((song) => (
        <div
          key={song.id}
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-2"
        >
          <Image
            src={song.thumbnail}
            alt={song.title}
            width={48}
            height={48}
            className="h-12 w-12 rounded-md object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{song.title}</p>
            <p className="font-mono text-xs text-muted-foreground">
              {formatDuration(song.duration)}
            </p>
          </div>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={() => addSong(song)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}
