"use client";

import Image from "next/image";
import { Pause, Play, Volume2 } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { formatDuration } from "@/lib/format-duration";
import { playbackToggled, volumeChanged } from "@/store/slices/playerSlice";

export function Player() {
  const dispatch = useAppDispatch();
  const { currentTrack, isPlaying, progressSeconds, volume } = useAppSelector(
    (state) => state.player,
  );

  // dispatch playbackToggled
  function togglePlayback() {}

  // dispatch volumeChanged with the new value from the slider (0 to 1)
  function changeVolume(value: number) {}

  if (!currentTrack) {
    return (
      <div className="flex w-full max-w-lg flex-col items-center gap-2 rounded-xl border border-dashed border-border p-8 text-center">
        <p className="font-medium">{"Nothing playing right now."}</p>
        <p className="text-sm text-muted-foreground">
          Add a song to the queue to start the party.
        </p>
      </div>
    );
  }

  const progressPercent = (progressSeconds / currentTrack.duration) * 100;

  return (
    <div className="flex w-full max-w-lg flex-col gap-4 rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-4">
        <Image
          src={currentTrack.thumbnail}
          alt={currentTrack.title}
          width={64}
          height={64}
          className="h-16 w-16 rounded-lg object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">{currentTrack.title}</p>
          <p className="font-mono text-xs text-muted-foreground">
            {formatDuration(progressSeconds)} / {formatDuration(currentTrack.duration)}
          </p>
        </div>
        <Button type="button" size="icon" onClick={togglePlayback}>
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: "linear" }}
        />
      </div>

      <div className="flex items-center gap-3">
        <Volume2 className="h-4 w-4 text-muted-foreground" />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => changeVolume(Number(e.target.value))}
          className="w-full accent-primary"
        />
      </div>
    </div>
  );
}
