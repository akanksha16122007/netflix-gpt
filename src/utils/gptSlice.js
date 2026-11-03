import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleShowGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { toggleShowGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
