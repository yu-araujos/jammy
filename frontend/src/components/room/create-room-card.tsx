"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export function CreateRoomCard() {
  const [roomCode, setRoomCode] = useState<string | null>(null);

  // call the backend/socket to create a room, get back a short room code
  // (e.g. 6 chars), then setRoomCode(code). Should also handle the loading
  // and error states while the request is in flight.
  function createRoom() {}

  if (roomCode) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8"
      >
        <div className="rounded-xl bg-primary p-4">
          <QRCodeSVG value={`https://jammy.app/room/${roomCode}`} size={180} />
        </div>
        <p className="font-mono text-4xl font-semibold tracking-[0.3em] text-primary">
          {roomCode}
        </p>
        <p className="text-sm text-muted-foreground">
          Share this code so people can join.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 py-4">
      <motion.button
        type="button"
        onClick={createRoom}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-40 w-40 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_70px_-20px_var(--primary)]"
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-primary/40"
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <Play
          className="h-14 w-14 translate-x-1 fill-current"
          strokeWidth={0}
        />
      </motion.button>

      <div className="text-center">
        <p className="text-lg font-semibold">Create room</p>
        <p className="text-sm text-muted-foreground">
          Start the session and get a code to share.
        </p>
      </div>
    </div>
  );
}
