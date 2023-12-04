import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Config";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  userData: {},
  accessToken: "",
};

export const UserData = createAsyncThunk(
  "UserData",
  async (value, thunkAPI) => {
    try {
        console.log(value.email, value.password)
      let response = await axios.post("api/users/sign-in", value);
      console.log(response.data)

      return response.data;
    } catch (error) {
      console.log(error);
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

export const signinSlice = createSlice({
  name: "signin",
  initialState,

  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.userData = {};
      state.accessToken = "";
    },
  },

  extraReducers: {
    [UserData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [UserData.fulfilled]: (state, action) => {
      //   console.log("hello"+action.payload.data.attributes.email);
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.userData = action.payload.data.attributes;
      state.accessToken = action.payload.data.token;
    },
    [UserData.rejected]: (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = signinSlice.actions;

export default signinSlice.reducer;
