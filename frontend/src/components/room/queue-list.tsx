import { GhostIcon } from "lucide-react";
import type { QueueItem } from "@/store/slices/queueSlice";

const queue: QueueItem[] = [];

function formatDuration(seconds: number): string {
  const minute = Math.floor(seconds / 60);
  const second = (seconds % 60).toString().padStart(2, "0");
  const formatedDuration = `${minute}:${second}`;
  return formatedDuration;
}

export function QueueList() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <h2 className="mb-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
        Up next
      </h2>

      <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border p-10 text-center">
        <GhostIcon className="h-8 w-8 text-muted-foreground" />
        <p className="font-medium">It's quiet in here.</p>
        <p className="text-sm text-muted-foreground">
          No songs queued yet. Be the one to break the silence.
        </p>
      </div>
    </div>
  );
}
