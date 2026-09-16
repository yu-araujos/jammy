import { GhostIcon } from "lucide-react";
import type { QueueItem } from "@/store/slices/queueSlice";

const queue: QueueItem[] = [];

// format a duration in seconds as "m:ss" (e.g. 213 -> "3:33")
function formatDuration(seconds: number): string {
  return "";
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
