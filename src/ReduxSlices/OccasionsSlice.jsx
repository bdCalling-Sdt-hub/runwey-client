import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  OccasionsList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const OccasionsData = createAsyncThunk(
  "Occasions",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(`api/categories`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response.data.message === "Invalid token") {
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

export const OccasionsSlice = createSlice({
  name: "occasions",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.OccasionsList = []), (state.pagination = {});
    },
  },
  extraReducers: {
    [OccasionsData.pending]: (state, action) => {
      state.Loading = true;
    },
    [OccasionsData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.OccasionsList = action.payload.data.attributes;
      state.pagination = action.payload.data;
    },
    [OccasionsData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.OccasionsList = []), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = OccasionsSlice.actions;

export default OccasionsSlice.reducer;
