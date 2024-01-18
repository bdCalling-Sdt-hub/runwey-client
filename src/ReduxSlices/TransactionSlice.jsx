import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  TransactionList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const TransactionData = createAsyncThunk(
  "Transaction",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(`api/payment/transaction`, {
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

export const TransactionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.TransactionList = []), (state.pagination = {});
    },
  },
  extraReducers: {
    [TransactionData.pending]: (state, action) => {
      state.Loading = true;
    },
    [TransactionData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.TransactionList = action.payload.data.attributes;
      state.pagination = action.payload.data;
    },
    [TransactionData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.TransactionList = []), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = TransactionSlice.actions;

export default TransactionSlice.reducer;
