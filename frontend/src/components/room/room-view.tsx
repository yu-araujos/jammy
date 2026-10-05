"use client";

import { useEffect } from "react";
import Link from "next/link";
import { DoorOpen } from "lucide-react";
import { RoomCodeBadge } from "./room-code-badge";
import { QueueList } from "./queue-list";
import { useRouter } from "next/navigation";

export function RoomView({ code }: { code: string }) {
  const router = useRouter();

  useEffect(() => {
    // if the user landed here fresh (e.g. scanned the QR) and hasn't joined
    // yet, send the join-room socket event here to connect them. Hosts who
    // just created the room can skip this.
  }, [code]);

  // notify the server this participant left the room (leave-room socket
  // event), so the others can be updated in real time
  function leaveRoom() {
    router.back();
  }

  return (
    <div className="relative flex flex-1 flex-col items-center gap-8 p-6">
      <Link
        href="/"
        onClick={leaveRoom}
        className="fixed top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
      >
        <DoorOpen className="h-4 w-4" />
        Leave
      </Link>

      <RoomCodeBadge code={code} />
      <QueueList />
    </div>
  );
}
