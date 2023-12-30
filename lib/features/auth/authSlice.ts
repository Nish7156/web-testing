import { AUTH_HOST, headers, host } from "@/lib/config";
import { AirDropData } from "@/lib/constant";
import { generateUUID } from "@/lib/utils";
import { ActionTypes } from "@/types/airdrop";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProState {
  user: any;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  twitterUser: any;
  tasks: any;
}

// {
//   chat_id: 728064379,
//   user_id: "0caa05dfb1304bc8b4dd07b7e153b753",
//   wallet_addr: "0x6A126acf0508FB2E0b9F8EC43e09eC518EdC1949",
//   username: null,
//   profile_image_url: null,
//   email: null,
// },

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (userPayload: any, thunkAPI) => {
    try {
      thunkAPI.dispatch(authSlice.actions.setLoading("pending"));
      const apiUrl = `${AUTH_HOST}/user-data`;
      const response = await axios.post(apiUrl, userPayload, {
        headers,
      });
      if (response.data.user_data) {
        thunkAPI.dispatch(
          authSlice.actions.setAirDropUserDetails(response.data.user_data)
        );
      }
      thunkAPI.dispatch(authSlice.actions.setLoading("succeeded"));
    } catch (error: any) {
      thunkAPI.dispatch(authSlice.actions.setLoading("failed"));
      thunkAPI.dispatch(authSlice.actions.setError(error.message));
    }
  }
);

const initialState = {
  user: null,
  loading: "idle",
  error: null,
  airDropUser: null,
  tasks: AirDropData,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload;
    },
    setAirDropUserDetails: (state, action) => {
      state.airDropUser = action.payload;
      state.tasks = state.tasks.map((task) => {
        switch (task.action) {
          case ActionTypes.FOLLOW_TWITTER:
            return {
              ...task,
              status: action.payload.is_twitter_follower
                ? "Complete"
                : task.status,
            };
          case ActionTypes.JOIN_TELEGRAM:
            return {
              ...task,
              status: action.payload.telegram_username
                ? "Complete"
                : task.status,
            };
          case ActionTypes.LOGIN_TELEGRAM:
            return {
              ...task,
              status: action.payload.is_telegram_member
                ? "Complete"
                : task.status,
            };
          case ActionTypes.REFER_FRIEND:
            return {
              ...task,
              status: action.payload.referral_count ? "Complete" : task.status,
            };
          case ActionTypes.EXTENSION:
            return {
              ...task,
              status: action.payload.is_extension_downloaded
                ? "Complete"
                : task.status,
            };
          default:
            return task;
        }
      });
    },
    setTasks: (state, action) => {
      const { userAction, status } = action.payload;
      const Idx = state.tasks.findIndex((task) => task.action === userAction);
      if (Idx !== -1) {
        const updatedTasks = [...state.tasks];
        updatedTasks[Idx] = {
          ...updatedTasks[Idx],
          status,
        };
        state.tasks = updatedTasks;
      } else {
        console.log(`Task with action ${userAction} not found.`);
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setUserDetails,
  setAirDropUserDetails,
  setTasks,
  setLoading,
  setError,
} = authSlice.actions;

export const getUserDetails = (state: any) => state.auth.user;
export const getAirDropUserDetails = (state: any) => state.auth.airDropUser;
export const getTasks = (state: any) => state.auth.tasks;

export default authSlice.reducer;
