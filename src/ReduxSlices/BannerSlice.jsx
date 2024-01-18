import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  Banner: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const BannerData = createAsyncThunk(
  "Banner",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(`/api/banner`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if(error.response.data.message === "Invalid token"){
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

export const BannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.BannerList = []), (state.pagination = {});
    },
  },
  extraReducers: {
    [BannerData.pending]: (state, action) => {
      state.Loading = true;
    },
    [BannerData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.BannerList = action.payload.data.bannersData;
      state.pagination = action.payload.data;
    },
    [BannerData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.BannerList = []), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = BannerSlice.actions;

export default BannerSlice.reducer;
