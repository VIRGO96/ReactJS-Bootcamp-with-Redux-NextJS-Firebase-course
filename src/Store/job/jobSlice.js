import { createSlice } from "@reduxjs/toolkit";
const jobSlice = createSlice({
  name: "jobs",
  initialState: { jobs: [], loader: false },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    addJob: (state, action) => {
      state.jobs = [...state.jobs, action.payload];
    },
  },
});

export const { setJobs, addJob } = jobSlice.actions;
export default jobSlice.reducer;
