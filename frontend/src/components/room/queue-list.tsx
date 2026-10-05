import Image from "next/image";
import { GhostIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { formatDuration } from "@/lib/format-duration";
import { songRemoved } from "@/store/slices/queueSlice";

export function QueueList() {
  const queue = useAppSelector((state) => state.queue.items);
  const dispatch = useAppDispatch();

  function removeSong(id: string) {
    dispatch(songRemoved({ id }));
  }

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
            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-2"
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={48}
              height={48}
              className="h-12 w-12 rounded-md object-cover"
            />
            <p className="flex-1 truncate text-sm font-medium">{item.title}</p>
            <div className="flex items-center gap-0 transition-all duration-200 group-hover:gap-3">
              <span className="font-mono text-xs text-muted-foreground">
                {formatDuration(item.duration)}
              </span>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="w-0 overflow-hidden opacity-0 transition-all duration-200 group-hover:w-9 group-hover:opacity-100 hover:text-destructive"
                onClick={() => removeSong(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
