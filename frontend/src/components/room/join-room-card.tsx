"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function JoinRoomCard() {
  const [code, setCode] = useState("");

  // validate the code (length/format), send a join-room request/socket event,
  // and on success navigate to /room/[code]. Should also surface an error
  // state if the room doesn't exist or the code is invalid.
  function joinRoom() {}

  return (
    <Card>
      <CardHeader>
        <CardTitle>Join a room</CardTitle>
        <CardDescription>Enter the code the host shared with you.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="room-code">Room code</Label>
          <Input
            id="room-code"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            maxLength={6}
            placeholder="ABC123"
            className="text-center text-2xl tracking-[0.3em] uppercase"
          />
        </div>
        <Button onClick={joinRoom} disabled={code.length !== 6} className="w-full">
          Join room
        </Button>
      </CardContent>
    </Card>
  );
}
