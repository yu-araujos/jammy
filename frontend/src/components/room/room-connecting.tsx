"use client";

import { useEffect } from "react";

export function RoomConnecting({ code }: { code: string }) {
  useEffect(() => {
    // auto-join this room using `code`: send the join-room socket event,
    // then redirect into the real room view (queue/player) once the
    // server confirms. Handle the "room doesn't exist" case too.
  }, [code]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
      {/* MOTION: spinner/pulse while connecting */}
      <p className="text-lg font-medium">Connecting to room {code}…</p>
      <p className="text-sm text-muted-foreground">Hang tight, joining the queue.</p>
    </div>
  );
}
