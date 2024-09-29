import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRoleApi } from "../api/roleApi";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
  message: "",
};

export const getRolesDataThunk = createAsyncThunk(
  "get-roles/get",
  async (_, { rejectWithValue }) => {
    try {
      const { labasis } = await getRoleApi();

      if (labasis.success) {
        return labasis.data;
      } else {
        return rejectWithValue(labasis.message);
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRolesDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(getRolesDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(getRolesDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export default rolesSlice.reducer;
