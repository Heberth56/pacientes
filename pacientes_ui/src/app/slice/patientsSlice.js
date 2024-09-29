import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createPatientApi,
  editPatientApi,
  getPatientsApi,
  getPatientApi,
  deletePatientApi,
} from "../api/patientApi";

const initialState = {
  data: [],
  isLoading: false,
  loading: false,
  error: false,
  message: "",
  formData: {
    first_name: "",
    last_name: "",
    cedula: "",
    gender: "",
    age: "",
    address: "",
    phone: "",
  },
};

export const createPatientDataThunk = createAsyncThunk(
  "create-patient/post",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await createPatientApi(payload);
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

export const editPatientDataThunk = createAsyncThunk(
  "edit-patient/put",
  async (payload, { rejectWithValue }) => {
    try {
      const { patient_id, data } = payload;
      const { labasis } = await editPatientApi(patient_id, data);
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

export const getPatientsDataThunk = createAsyncThunk(
  "get-patients/get",
  async (_, { rejectWithValue }) => {
    try {
      const { labasis } = await getPatientsApi();
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

export const getPatientByIdDataThunk = createAsyncThunk(
  "get-patient-by-id/get",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await getPatientApi(payload);
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

export const deletePatientDataThunk = createAsyncThunk(
  "remove-patien/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await deletePatientApi(payload);
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

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    resetState: () => initialState,
    loadPatientData: (state, action) => {
      state.formData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPatientDataThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(createPatientDataThunk.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(createPatientDataThunk.rejected, (state, action) => {
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

      .addCase(editPatientDataThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(editPatientDataThunk.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(editPatientDataThunk.rejected, (state, action) => {
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

      .addCase(getPatientsDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(getPatientsDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(getPatientsDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      })

      .addCase(getPatientByIdDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(getPatientByIdDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        action.payload.age = action.payload.age || "";
        state.formData = action.payload;
      })

      .addCase(getPatientByIdDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      })

      .addCase(deletePatientDataThunk.pending, (state) => {
        state.isLoading = false;
        state.error = false;
        state.message = "";
      })

      .addCase(deletePatientDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        let index = state.data.findIndex((elem) => elem.id == action.payload);
        if (index !== -1) state.data.splice(index, 1);
      })

      .addCase(deletePatientDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { resetState, loadPatientData } = patientsSlice.actions;
export default patientsSlice.reducer;
