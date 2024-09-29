import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createSpecialtyApi,
  editSpecialtyApi,
  getSpecialtiesApi,
  getSpecialtyApi,
  deleteSpecialtyApi,
} from "../api/specialtyApi";

const initialState = {
  data: [],
  isLoading: false,
  loading: false,
  error: false,
  message: "",
  formData: {
    name: "",
    description: "",
  },
};

export const createSpecialtyDataThunk = createAsyncThunk(
  "create-Specialty/post",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await createSpecialtyApi(payload);
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

export const editSpecialtyDataThunk = createAsyncThunk(
  "edit-Specialty/put",
  async (payload, { rejectWithValue }) => {
    try {
      const { specialty_id, data } = payload;
      const { labasis } = await editSpecialtyApi(specialty_id, data);
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

export const getSpecialtiesDataThunk = createAsyncThunk(
  "get-Specialties/get",
  async (_, { rejectWithValue }) => {
    try {
      const { labasis } = await getSpecialtiesApi();
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

export const getSpecialtyByIdDataThunk = createAsyncThunk(
  "get-Specialty-by-id/get",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await getSpecialtyApi(payload);
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

export const deleteSpecialtyDataThunk = createAsyncThunk(
  "remove-Specialty/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await deleteSpecialtyApi(payload);
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

const specialtySlice = createSlice({
  name: "specialty",
  initialState,
  reducers: {
    resetState: () => initialState,
    loadPatientData: (state, action) => {
      state.formData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSpecialtyDataThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(createSpecialtyDataThunk.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(createSpecialtyDataThunk.rejected, (state, action) => {
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

      .addCase(editSpecialtyDataThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(editSpecialtyDataThunk.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(editSpecialtyDataThunk.rejected, (state, action) => {
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

      .addCase(getSpecialtiesDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(getSpecialtiesDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(getSpecialtiesDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      })

      .addCase(getSpecialtyByIdDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(getSpecialtyByIdDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.formData = action.payload;
      })

      .addCase(getSpecialtyByIdDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      })

      .addCase(deleteSpecialtyDataThunk.pending, (state) => {
        state.isLoading = false;
        state.error = false;
        state.message = "";
      })

      .addCase(deleteSpecialtyDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        let index = state.data.findIndex((elem) => elem.id == action.payload);
        if (index !== -1) state.data.splice(index, 1);
      })

      .addCase(deleteSpecialtyDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { resetState, loadPatientData } = specialtySlice.actions;
export default specialtySlice.reducer;
