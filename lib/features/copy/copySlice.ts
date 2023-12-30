import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  text: "",
};

// Create a slice
const copySlice = createSlice({
  name: "copy",
  initialState,
  reducers: {
    setCopiedText: (state, action) => {
      state.text = action.payload;
    },
  },
});

// Export the actions and reducer
export const { setCopiedText } = copySlice.actions;
export const getCopiedText = (state: any) => state.copy?.text;

export default copySlice.reducer;
