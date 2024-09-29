import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApiLogin } from "../api/authApi";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
  message: "",
};

export const authLoginThunk = createAsyncThunk(
  "auth-login/post",
  async (payload, { rejectWithValue }) => {
    try {
      const { username, password } = payload;
      const { futuresyo } = await authApiLogin(username, password);

      if (futuresyo.success) {
        return futuresyo.data;
      } else {
        return rejectWithValue(futuresyo.message);
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLoginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(authLoginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(authLoginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export default authSlice.reducer;
