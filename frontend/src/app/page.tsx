"use client";

import { useState } from "react";
import { CreateRoomCard } from "@/components/room/create-room-card";
import { JoinRoomCard } from "@/components/room/join-room-card";
import { AnimatePresence, motion } from "motion/react";

export default function Home() {
  const [mode, setMode] = useState<"create" | "join">("create");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-center text-3xl font-semibold">Jammy</h1>

        <AnimatePresence mode="wait">
          {mode === "create" ? (
            <motion.div
              key="create"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.12 } }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <CreateRoomCard
                isLoading={isLoading}
                onLoadingChange={setIsLoading}
              />
            </motion.div>
          ) : (
            <motion.div
              key="join"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.12 } }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <JoinRoomCard />
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          {isLoading ? (
            <span className="text-xl">Creating your room…</span>
          ) : mode === "create" ? (
            <button
              type="button"
              onClick={() => setMode("join")}
              className="underline underline-offset-4 hover:text-foreground"
            >
              Room already exists? Join it
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setMode("create")}
              className="underline underline-offset-4 hover:text-foreground"
            >
              Don't have a room? Create one
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
