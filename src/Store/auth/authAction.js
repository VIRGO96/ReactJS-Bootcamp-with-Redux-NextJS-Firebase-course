import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, auth } from "../../Config/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { setUser, setLoader, clearUser } from "./authSlice";
export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password }, { dispatch }) => {
    try {
      dispatch(setLoader(true));
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user, "user>>>>>>>>>>>");
      if (user.user) {
        const userRef = doc(db, "users", user?.user?.uid);
        await setDoc(userRef, {
          email,
        });
        dispatch(setLoader(false));
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const signin = createAsyncThunk(
  "auth/signup",
  async ({ email, password }, { dispatch }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userDocRef = doc(db, "users", user.uid);
      const userData = await getDoc(userDocRef);
      if (userData.exists()) {
        dispatch(setUser({ id: userData.id, ...userData.data() }));
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const signOutUser = createAsyncThunk(
  "auth/signOut",
  async (_, { dispatch }) => {
    try {
      await signOut(auth)
        .then(() => {
          dispatch(clearUser());
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  }
);
