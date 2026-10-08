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
    songAdded(state, action: PayloadAction<QueueItem>) {
      state.items.push(action.payload);
    },

    // remove a song from the queue by id
    songRemoved(state, action: PayloadAction<{ id: string }>) {
      const findSongIndex = state.items.findIndex(
        (itemId) => itemId.id === action.payload.id,
      );
      if (findSongIndex !== -1) {
        state.items.splice(findSongIndex, 1);
      }
    },

    // move a song from one index to another (drag-to-reorder)
    songReordered(
      state,
      action: PayloadAction<{ fromIndex: number; toIndex: number }>,
    ) {
      const [moved] = state.items.splice(action.payload.fromIndex, 1);
      state.items.splice(action.payload.toIndex, 0, moved);
    },

    // remove the first song from the queue (called when a track finishes and the next one starts)
    songDequeued(state) {
      state.items.shift();
    },

    // replace the whole queue at once (e.g. syncing state from the server on join)
    queueReplaced(state, action: PayloadAction<QueueItem[]>) {
      state.items = action.payload;
    },
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
