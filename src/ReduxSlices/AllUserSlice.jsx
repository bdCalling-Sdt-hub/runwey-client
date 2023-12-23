import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  AllUserList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const AllUserData = createAsyncThunk(
  "AllUser",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(`api/users/sort?search=${value.sort}&page=${value.page}`, {
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

export const AllUserSlice = createSlice({
  name: "allUser",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.AllUserList = []), (state.pagination = {});
    },
  },
  extraReducers: {
    [AllUserData.pending]: (state, action) => {
      state.Loading = true;
    },
    [AllUserData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.AllUserList = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    [AllUserData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.AllUserList = []), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = AllUserSlice.actions;

export default AllUserSlice.reducer;
