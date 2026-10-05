import Image from "next/image";
import { GhostIcon } from "lucide-react";
import { useAppSelector } from "@/store/hooks";

function formatDuration(seconds: number): string {
  const minute = Math.floor(seconds / 60);
  const second = (seconds % 60).toString().padStart(2, "0");
  const formatedDuration = `${minute}:${second}`;
  return formatedDuration;
}

export function QueueList() {
  const queue = useAppSelector((state) => state.queue.items);

  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <h2 className="mb-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
        Up next
      </h2>

      {queue.length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border p-10 text-center">
          <GhostIcon className="h-8 w-8 text-muted-foreground" />
          <p className="font-medium">{"It's quiet in here."}</p>
          <p className="text-sm text-muted-foreground">
            No songs queued yet. Be the one to break the silence.
          </p>
        </div>
      ) : (
        queue.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-2"
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={48}
              height={48}
              className="h-12 w-12 rounded-md object-cover"
            />
            <p className="flex-1 truncate text-sm font-medium">{item.title}</p>
            <span className="font-mono text-xs text-muted-foreground">
              {formatDuration(item.duration)}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
