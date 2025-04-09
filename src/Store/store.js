import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import jobSlice from "./job/jobSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    jobs: jobSlice,
  },
});
export default store;
