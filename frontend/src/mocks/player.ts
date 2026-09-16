import type { PlayerState } from "@/store/slices/playerSlice";

export const mockPlayerState: PlayerState = {
  currentTrack: null,
  isPlaying: true,
  volume: 1,
  progressSeconds: 42,
  isCrossfading: false,
};
