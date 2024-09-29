import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserApi,
  getUsersApi,
  getUserApi,
  deleteUserApi,
} from "../api/userApi";

const initialState = {
  data: [],
  isLoading: false,
  loading: false,
  error: false,
  message: "",
  formData: {
    first_name: "",
    last_name: "",
    email: "",
    cedula: "",
    password: "",
    username: "",
    phone: "",
    role: "",
    age: "",
    gender: "",
    address: "",
  },
};

export const createUserDataThunk = createAsyncThunk(
  "create-user/post",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await createUserApi(payload);
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

export const getUsersDataThunk = createAsyncThunk(
  "get-users/get",
  async (_, { rejectWithValue }) => {
    try {
      const { labasis } = await getUsersApi();
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

export const getUserByIdDataThunk = createAsyncThunk(
  "get-user-by-id/get",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await getUserApi(payload);
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

export const delteUserDataThunk = createAsyncThunk(
  "remove-user/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { labasis } = await deleteUserApi(payload);
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

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetState: () => initialState,
    loadUserData: (state, action) => {
      state.formData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserDataThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(createUserDataThunk.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(createUserDataThunk.rejected, (state, action) => {
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

      .addCase(getUsersDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(getUsersDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(getUsersDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      })

      .addCase(getUserByIdDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = "";
      })

      .addCase(getUserByIdDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        action.payload.age = action.payload.age || "";
        action.payload.role = action.payload.role || "";
        action.payload.password = action.payload.password || "";
        state.formData = action.payload;
      })

      .addCase(getUserByIdDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      })

      .addCase(delteUserDataThunk.pending, (state) => {
        state.isLoading = false;
        state.error = false;
        state.message = "";
      })

      .addCase(delteUserDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        let index = state.data.findIndex((elem) => elem.id == action.payload);
        if (index !== -1) state.data.splice(index, 1);
      })

      .addCase(delteUserDataThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { resetState, loadUserData } = usersSlice.actions;
export default usersSlice.reducer;
