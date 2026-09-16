"use client";

import { useRouter } from "next/navigation";
import { Play } from "lucide-react";
import { mockRoomCode } from "@/mocks/room";
import { AnimatePresence, motion } from "motion/react";
import { LoadingWave } from "./loading-wave";

export function CreateRoomCard({
  isLoading,
  onLoadingChange,
}: {
  isLoading: boolean;
  onLoadingChange: (isLoading: boolean) => void;
}) {
  const router = useRouter();

  function createRoom() {
    onLoadingChange(true);
    // TODO: this setTimeout is a stand-in for the real backend/socket call —
    // it only exists so the loading animation has something to wait for
    // right now. Replace it with the actual request once the backend exists,
    // and call router.push once that request resolves with the real code.
    setTimeout(() => {
      router.push(`/room/${mockRoomCode}`);
    }, 1200);
  }

  return (
    <div className="flex w-full flex-col items-center gap-6 py-4">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] flex w-screen items-center justify-center"
          >
            <LoadingWave />
          </motion.div>
        ) : (
          <motion.button
            key="button"
            type="button"
            onClick={createRoom}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            className="relative flex h-40 w-40 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_70px_-20px_var(--primary)]"
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-primary/40"
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Play
              className="h-14 w-14 translate-x-1 fill-current"
              strokeWidth={0}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="text-center">
          <p className="text-lg font-semibold">Create room</p>
          <p className="text-sm text-muted-foreground">
            Start the session and get a code to share.
          </p>
        </div>
      )}
    </div>
  );
}
