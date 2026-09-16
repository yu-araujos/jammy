"use client";

import { useRouter } from "next/navigation";
import { Play } from "lucide-react";
import { mockRoomCode } from "@/mocks/room";
import { motion } from "motion/react";
import { useState } from "react";

export function CreateRoomCard() {
  const router = useRouter();

  function createRoom() {
    router.push(`/room/${mockRoomCode}`);
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
