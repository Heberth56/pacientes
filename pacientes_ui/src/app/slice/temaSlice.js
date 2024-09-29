import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createTemaApi,
  editTemaApi,
  getTemasApi,
  getTemaApi,
  deleteTemaApi,
} from "../api/temaApi";

const initialState = {
  data: [],
  isLoading: false,
  loading: false,
  error: false,
  message: "",
  formData: {
    specialty: "",
    name: "",
    description: "",
  },
};

export const createTemaDataThunk = createAsyncThunk(
  "create-tema/post",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await createTemaApi(payload);
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

export const editTemaDataThunk = createAsyncThunk(
  "edit-tema/put",
  async (payload, { rejectWithValue }) => {
    try {
      const { tema_id, data } = payload;
      const { labasis } = await editTemaApi(tema_id, data);
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

export const getTemasDataThunk = createAsyncThunk(
  "get-temas/get",
  async (_, { rejectWithValue }) => {
    try {
      const { labasis } = await getTemasApi();
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

export const getTemaByIdDataThunk = createAsyncThunk(
  "get-tema-by-id/get",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await getTemaApi(payload);
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

export const deleteTemaDataThunk = createAsyncThunk(
  "remove-tema/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await deleteTemaApi(payload);
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

const temaSlice = createSlice({
  name: "tema",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTemaDataThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(createTemaDataThunk.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(createTemaDataThunk.rejected, (state, action) => {
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

      .addCase(editTemaDataThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(editTemaDataThunk.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(editTemaDataThunk.rejected, (state, action) => {
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

      .addCase(getTemasDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(getTemasDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(getTemasDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      })

      .addCase(getTemaByIdDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(getTemaByIdDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.formData = action.payload;
      })

      .addCase(getTemaByIdDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      })

      .addCase(deleteTemaDataThunk.pending, (state) => {
        state.isLoading = false;
        state.error = false;
        state.message = "";
      })

      .addCase(deleteTemaDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        let index = state.data.findIndex((elem) => elem.id == action.payload);
        if (index !== -1) state.data.splice(index, 1);
      })

      .addCase(deleteTemaDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { resetState, loadPatientData } = temaSlice.actions;
export default temaSlice.reducer;
