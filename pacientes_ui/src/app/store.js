import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import rolesSlice from "./slice/rolesSlice";
import usersSlice from "./slice/usersSlice";
import patientsSlice from "./slice/patientsSlice";
import specialtySlices from "./slice/specialtySlices";
import temaSlice from "./slice/temaSlice";
import testSlice from "./slice/testSlice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    rolesSlice: rolesSlice,
    usersSlice: usersSlice,
    patientsSlice: patientsSlice,
    specialtySlices: specialtySlices,
    temaSlice: temaSlice,
    testSlice: testSlice,
  },
});
