import type { Participant } from "@/store/slices/roomSlice";

export const mockParticipants: Participant[] = [
  { id: "p1", isHost: true },
  { id: "p2", isHost: false },
  { id: "p3", isHost: false },
];

export const mockRoomCode = "AB12CD";
