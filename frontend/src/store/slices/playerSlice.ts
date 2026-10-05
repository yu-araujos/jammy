import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QueueItem } from "./queueSlice";

export interface PlayerState {
  currentTrack: QueueItem | null;
  isPlaying: boolean;
  volume: number;
  progressSeconds: number;
  isCrossfading: boolean;
}

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  volume: 1,
  progressSeconds: 0,
  isCrossfading: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    // set currentTrack and mark isPlaying true (host started playback of a track)
    trackStarted(state, action: PayloadAction<QueueItem>) {
      state.currentTrack = action.payload;
      state.isPlaying = true;
      state.progressSeconds = 0;
    },

    // toggle isPlaying (host hit play/pause)
    playbackToggled(state) {
      state.isPlaying = !state.isPlaying;
    },

    // update progressSeconds as the track plays (drives the "near the end, start crossfade" check)
    progressUpdated(state, action: PayloadAction<{ seconds: number }>) {
      state.progressSeconds = Math.max(0, action.payload.seconds);
    },

    // set isCrossfading true when the current track is close to ending and the next one should start fading in
    crossfadeStarted(state) {},

    // clear currentTrack, isPlaying and isCrossfading (queue is empty, nothing left to play)
    playbackStopped(state) {
      state.currentTrack = null;
      state.isPlaying = false;
      state.isCrossfading = false;
    },

    // update volume (0 to 1), used by the crossfade logic and any manual volume control
    volumeChanged(state, action: PayloadAction<{ volume: number }>) {
      state.volume = Math.min(1, Math.max(0, action.payload.volume));
    },
  },
});

export const {
  trackStarted,
  playbackToggled,
  progressUpdated,
  crossfadeStarted,
  playbackStopped,
  volumeChanged,
} = playerSlice.actions;

export default playerSlice.reducer;
