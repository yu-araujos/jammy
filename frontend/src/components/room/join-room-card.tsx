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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function JoinRoomCard() {
  const [code, setCode] = useState("");
  const router = useRouter();

  function joinRoom() {
    const verifyCode = code.length === 6 && /^[A-Z0-9]{6}$/.test(code);
    if (verifyCode) {
      router.push(`/room/${code}`);
    } else {
      toast.error("Invalid code");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Join a room</CardTitle>
        <CardDescription>
          Enter the code the host shared with you.
        </CardDescription>
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
        <Button
          onClick={joinRoom}
          disabled={code.length !== 6}
          className="w-full"
        >
          Join room
        </Button>
      </CardContent>
    </Card>
  );
}
