import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Participant {
  id: string;
  isHost: boolean;
}

export interface RoomState {
  roomCode: string | null;
  isHost: boolean;
  participants: Participant[];
  hostDisconnected: boolean;
}

const initialState: RoomState = {
  roomCode: null,
  isHost: false,
  participants: [],
  hostDisconnected: false,
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    // set roomCode, isHost and reset participants when a room is created (host) or joined (guest)
    roomEntered(
      state,
      action: PayloadAction<{ roomCode: string; isHost: boolean }>,
    ) {
      state.roomCode = action.payload.roomCode;
      state.isHost = action.payload.isHost;
      state.participants = [];
    },

    // clear everything back to initialState (leaving the room / room closed)
    roomLeft() {
      return initialState;
    },

    // add a participant to the list when someone joins (avoid duplicate ids)
    participantJoined(state, action: PayloadAction<Participant>) {
      const idAlreadyJoined = state.participants.some(
        (participant) => action.payload.id === participant.id,
      );
      if (!idAlreadyJoined) {
        state.participants.push(action.payload);
      }
    },

    // remove a participant from the list by id when they disconnect
    participantLeft(state, action: PayloadAction<{ id: string }>) {
      const findParticipantIndex = state.participants.findIndex(
        (participant) => participant.id === action.payload.id,
      );
      if (findParticipantIndex !== -1) {
        state.participants.splice(findParticipantIndex, 1);
      }
    },

    // flip hostDisconnected to true when the host drops connection
    hostDisconnected(state) {
      state.hostDisconnected = true;
    },
  },
});

export const {
  roomEntered,
  roomLeft,
  participantJoined,
  participantLeft,
  hostDisconnected,
} = roomSlice.actions;

export default roomSlice.reducer;
