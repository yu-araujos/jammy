import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface QueueItem {
  id: string;
  videoId: string;
  title: string;
  thumbnail: string;
  duration: number;
}

export interface QueueState {
  items: QueueItem[];
}

const initialState: QueueState = {
  items: [],
};

const queueSlice = createSlice({
  name: "queue",
  initialState,
  reducers: {
    // add a song to the end of the queue
    songAdded(state, action: PayloadAction<QueueItem>) {},

    // remove a song from the queue by id
    songRemoved(state, action: PayloadAction<{ id: string }>) {},

    // move a song from one index to another (drag-to-reorder)
    songReordered(state, action: PayloadAction<{ fromIndex: number; toIndex: number }>) {},

    // remove the first song from the queue (called when a track finishes and the next one starts)
    songDequeued(state) {},

    // replace the whole queue at once (e.g. syncing state from the server on join)
    queueReplaced(state, action: PayloadAction<QueueItem[]>) {},
  },
});

export const {
  songAdded,
  songRemoved,
  songReordered,
  songDequeued,
  queueReplaced,
} = queueSlice.actions;

export default queueSlice.reducer;
