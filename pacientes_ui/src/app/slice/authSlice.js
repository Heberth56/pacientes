import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApiLogin } from "../api/authApi";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
  message: "",
  allow: false,
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

export const renewDataThunk = createAsyncThunk(
  "renew-data/post",
  async (_, { rejectWithValue }) => {
    try {
      const data_res = JSON.parse(localStorage.getItem("lab_data"));
      if (data_res) return data_res;
      else return rejectWithValue("Vuelva a iniciar session");
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLoginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
        state.allow = false;
      })

      .addCase(authLoginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.allow = true;
      })

      .addCase(authLoginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
      })

      .addCase(renewDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
        state.allow = false;
      })

      .addCase(renewDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.allow = true;
      })

      .addCase(renewDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export const dataAllow = (state) => state.authSlice.allow;
export const dataAuth = (state) => state.authSlice.data;
export const dataLoading = (state) => state.authSlice.isLoading;
export const { resetState } = authSlice.actions;
export default authSlice.reducer;
