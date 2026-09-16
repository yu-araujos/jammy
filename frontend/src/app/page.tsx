"use client";

import { useState } from "react";
import { CreateRoomCard } from "@/components/room/create-room-card";
import { JoinRoomCard } from "@/components/room/join-room-card";

export default function Home() {
  const [mode, setMode] = useState<"create" | "join">("create");

  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-center text-3xl font-semibold">Jammy</h1>

        {/* MOTION: crossfade/slide when switching between create and join */}
        {mode === "create" ? <CreateRoomCard /> : <JoinRoomCard />}

        <p className="mt-4 text-center text-sm text-muted-foreground">
          {mode === "create" ? (
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
              Don&apos;t have a room? Create one
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
