import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  messageId: "",
};

// Create a slice
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setMessageId: (state, action) => {
      state.messageId = action.payload;
    },
  },
});

// Export the actions and reducer
export const { setMessageId } = chatSlice.actions;
export const getMessageId = (state: any) => state.chat?.messageId;

export default chatSlice.reducer;
