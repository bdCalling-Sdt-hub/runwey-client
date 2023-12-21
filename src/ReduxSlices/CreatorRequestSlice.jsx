import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  CreatorRequestList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const CreatorRequestData = createAsyncThunk(
  "CreatorRequest",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(`api/users/pending-creator-list`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      return response.data;
    } catch (error) {
      if (
        "You are not authorised to sign in now" ===
          error.response.data.message ||
        "Error authorization" === error.response.data.message
      ) {
        localStorage.removeItem("token");
        localStorage.removeItem("yourInfo");
      }
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const CreatorRequestSlice = createSlice({
  name: "creatorRequest",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.CreatorRequestList = []), (state.pagination = {});
    },
  },
  extraReducers: {
    [CreatorRequestData.pending]: (state, action) => {
      state.Loading = true;
    },
    [CreatorRequestData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.CreatorRequestList = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    [CreatorRequestData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.CreatorRequestList = []), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = CreatorRequestSlice.actions;

export default CreatorRequestSlice.reducer;
