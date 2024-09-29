import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getSpecialtyTemaApi,
  createTestApi,
  getTestsApi,
  getDiagnosticApi,
} from "../api/testApi";

const initialState = {
  data: [],
  content: [],
  isLoading: false,
  loading: false,
  error: false,
  message: "",
  formData: {
    user: "",
    patient: "",
    temas: "",
    diagnostic: "",
  },
};

export const getSpecialtyTemaDataThunk = createAsyncThunk(
  "get-specialty-tema/get",
  async (_, { rejectWithValue }) => {
    try {
      const { labasis } = await getSpecialtyTemaApi();

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

export const createTestDataThunk = createAsyncThunk(
  "create-test/post",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await createTestApi(payload);
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

export const getTestsDataThunk = createAsyncThunk(
  "get-test/get",
  async (_, { rejectWithValue }) => {
    try {
      const { labasis } = await getTestsApi();

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

export const getDiagnosticDataThunk = createAsyncThunk(
  "get-diagnostic/get",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await getDiagnosticApi(payload);

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

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpecialtyTemaDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(getSpecialtyTemaDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.content = action.payload;
      })

      .addCase(getSpecialtyTemaDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      })

      .addCase(createTestDataThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(createTestDataThunk.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(createTestDataThunk.rejected, (state, action) => {
        if (typeof action.payload == "object") {
          Object.keys(action.payload).forEach((field) => {
            const campos = action.payload[field];
            campos.forEach((errorMsg) => {
              state.message += `Error en el campo '${field}': ${errorMsg}\n`;
            });
          });
        } else state.message = action.payload;

        state.loading = false;
        state.error = true;
      })

      .addCase(getTestsDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(getTestsDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(getTestsDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      })

      .addCase(getDiagnosticDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
        state.data = [];
      })

      .addCase(getDiagnosticDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(getDiagnosticDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default testSlice.reducer;
