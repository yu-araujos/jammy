"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CreateRoomCard() {
  const [roomCode, setRoomCode] = useState<string | null>(null);

  // call the backend/socket to create a room, get back a short room code
  // (e.g. 6 chars), then setRoomCode(code). Should also handle the loading
  // and error states while the request is in flight.
  function createRoom() {}

  if (roomCode) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your room is ready</CardTitle>
          <CardDescription>
            Share this code or QR so people can join.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          {/* MOTION: room code + QR should animate in (fade/scale) once created */}
          <div className="flex items-center justify-center rounded-lg bg-white p-4">
            <QRCodeSVG value={`https://jammy.app/room/${roomCode}`} size={180} />
          </div>
          <p className="text-4xl font-semibold tracking-[0.3em]">{roomCode}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Host a room</CardTitle>
        <CardDescription>
          Create a room and let people queue songs from their phones.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={createRoom} className="w-full">
          Create room
        </Button>
      </CardContent>
    </Card>
  );
}
