"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { QRCodeSVG } from "qrcode.react";

export function RoomCodeBadge({ code }: { code: string }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.button
      layout
      type="button"
      onClick={() => setExpanded((prev) => !prev)}
      transition={{ type: "spring", stiffness: 320, damping: 30 }}
      className={
        expanded
          ? "fixed top-4 right-4 z-10 flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-4"
          : "fixed top-4 right-4 z-10 rounded-full border border-border bg-card px-4 py-2"
      }
    >
      <AnimatePresence mode="popLayout">
        {expanded && (
          <motion.div
            key="qr"
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="rounded-lg bg-primary p-3"
          >
            <QRCodeSVG value={`https://jammy.app/room/${code}`} size={140} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        layout
        className={
          expanded
            ? "font-mono text-xl font-semibold tracking-[0.3em] text-primary"
            : "font-mono text-sm tracking-[0.2em] text-primary"
        }
      >
        {code}
      </motion.p>
    </motion.button>
  );
}
