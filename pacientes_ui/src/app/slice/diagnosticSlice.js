import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { testPatient } from "../api/testApi";
import { reportApi } from "../api/reportApi";

const initialState = {
  data: [],
  content: [],
  isLoading: false,
  loading: false,
  error: false,
  message: "",
};

export const testPatientDataThunk = createAsyncThunk(
  "get-test-patien/get",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await testPatient(payload);

      if (labasis.success) return labasis.data;
      else return rejectWithValue(labasis.message);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const reportSliceDataThunk = createAsyncThunk(
  "report-patient/get",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await reportApi(payload);
      if (labasis.success) return labasis.data;
      else return rejectWithValue(labasis.message);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const diagnosticSlice = createSlice({
  name: "diagnostic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(testPatientDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(testPatientDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.content = action.payload;
      })

      .addCase(testPatientDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      })

      .addCase(reportSliceDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(reportSliceDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      })

      .addCase(reportSliceDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const diagnosticData = (state) => state.diagnosticSlice.content;

export default diagnosticSlice.reducer;
