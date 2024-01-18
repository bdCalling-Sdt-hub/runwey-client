import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAxios from "../../Config";

const initialState = {
  Error: false,
  Success: false,
  Loading: false,
  QuestionnaireList: [],
  pagination: {},
};

let token = localStorage.getItem("token");

export const QuestionnaireData = createAsyncThunk(
  "Questionnaire",
  async (value, thunkAPI) => {
    try {
      let response = await baseAxios.get(`api/question`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
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

export const QuestionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    reset: (state) => {
      state.Loading = false;
      state.Success = false;
      state.Error = false;
      (state.QuestionnaireList = []), (state.pagination = {});
    },
  },
  extraReducers: {
    [QuestionnaireData.pending]: (state, action) => {
      state.Loading = true;
    },
    [QuestionnaireData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.Success = true;
      state.Error = false;
      state.QuestionnaireList = action.payload.data;
      state.pagination = action.payload.data;
    },
    [QuestionnaireData.rejected]: (state, action) => {
      state.Loading = false;
      state.Success = false;
      state.Error = true;
      (state.QuestionnaireList = []), (state.pagination = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset } = QuestionnaireSlice.actions;

export default QuestionnaireSlice.reducer;
