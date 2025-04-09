import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../Config/FirebaseConfig";
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { setJobs } from "./jobSlice";

export const addJobs = createAsyncThunk(
  "job/addJob",
  async ({ title, location }, { rejectWithValue }) => {
    try {
      if (!title || !location) {
        alert("All fields are required!");
      }
      await addDoc(collection(db, "jobs"), {
        title,
        location,
        createdAt: serverTimestamp(),
      });
      alert("Job added successfully!");
    } catch (error) {
      console.error("Error adding job:", error.message);
      alert("Failed to add the job. Please try again.");
      return rejectWithValue(error.message);
    }
  }
);
export const getJobs = createAsyncThunk(
  "job/getJobs",
  async (searchQuery, { dispatch }) => {
    try {
      const jobsCollection = collection(db, "jobs");
      let jobsQuery = jobsCollection;
      if (searchQuery) {
        jobsQuery = query(jobsCollection, where("title", "==", searchQuery));
      }
      onSnapshot(jobsQuery, (snapshot) => {
        const jobs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setJobs(jobs));
      });
    } catch (error) {
      console.log(error.message);
    }
  }
);
