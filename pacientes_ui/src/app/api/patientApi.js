import axios from "axios";
import { API_URL } from "../../config";

export const createPatientApi = async (payload) => {
  try {
    const res = await axios.post(`${API_URL}/api/pacientes/create/`, payload);
    const body = await res.data;
    if (res.status === 200) {
      return {
        labasis: {
          success: body.success,
          code: body.code,
          message: body.message,
          status: body.status,
          data: body.data,
        },
      };
    } else {
      return {
        labasis: {
          success: false,
          code: body.code,
          message: body.message,
          status: body.status,
          data: null,
        },
      };
    }
  } catch (err) {
    if (err.response) {
      return {
        labasis: {
          success: false,
          code: err.response.data.code || 500,
          message: err.response.data.message || "Ocurrio un error inesperado",
          status: err.response.data.status || 500,
          data: null,
        },
      };
    } else {
      return {
        labasis: {
          success: false,
          code: 500,
          message: err.message || "Opps! Algo salió mal, intente más tarde.",
          status: "error",
          data: null,
        },
      };
    }
  }
};

export const editPatientApi = async (patient_id, payload) => {
  try {
    const res = await axios.put(
      `${API_URL}/api/pacientes/edit/${patient_id}`,
      payload
    );
    const body = await res.data;
    if (res.status === 200) {
      return {
        labasis: {
          success: body.success,
          code: body.code,
          message: body.message,
          status: body.status,
          data: body.data,
        },
      };
    } else {
      return {
        labasis: {
          success: false,
          code: body.code,
          message: body.message,
          status: body.status,
          data: null,
        },
      };
    }
  } catch (err) {
    if (err.response) {
      return {
        labasis: {
          success: false,
          code: err.response.data.code || 500,
          message: err.response.data.message || "Ocurrio un error inesperado",
          status: err.response.data.status || 500,
          data: null,
        },
      };
    } else {
      return {
        labasis: {
          success: false,
          code: 500,
          message: err.message || "Opps! Algo salió mal, intente más tarde.",
          status: "error",
          data: null,
        },
      };
    }
  }
};

export const getPatientsApi = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/pacientes/list/`);
    const body = await res.data;
    if (res.status === 200) {
      return {
        labasis: {
          success: body.success,
          code: body.code,
          message: body.message,
          status: body.status,
          data: body.data,
        },
      };
    } else {
      return {
        labasis: {
          success: false,
          code: body.code,
          message: body.message,
          status: body.status,
          data: null,
        },
      };
    }
  } catch (err) {
    if (err.response) {
      return {
        labasis: {
          success: false,
          code: err.response.data.code || 500,
          message: err.response.data.message || "Ocurrio un error inesperado",
          status: err.response.data.status || 500,
          data: null,
        },
      };
    } else {
      return {
        labasis: {
          success: false,
          code: 500,
          message: err.message || "Opps! Algo salió mal, intente más tarde.",
          status: "error",
          data: null,
        },
      };
    }
  }
};

export const getPatientApi = async (user_id) => {
  try {
    const res = await axios.get(`${API_URL}/api/pacientes/list/${user_id}`);
    const body = await res.data;
    if (res.status === 200) {
      return {
        labasis: {
          success: body.success,
          code: body.code,
          message: body.message,
          status: body.status,
          data: body.data,
        },
      };
    } else {
      return {
        labasis: {
          success: false,
          code: body.code,
          message: body.message,
          status: body.status,
          data: null,
        },
      };
    }
  } catch (err) {
    if (err.response) {
      return {
        labasis: {
          success: false,
          code: err.response.data.code || 500,
          message: err.response.data.message || "Ocurrio un error inesperado",
          status: err.response.data.status || 500,
          data: null,
        },
      };
    } else {
      return {
        labasis: {
          success: false,
          code: 500,
          message: err.message || "Opps! Algo salió mal, intente más tarde.",
          status: "error",
          data: null,
        },
      };
    }
  }
};

export const deletePatientApi = async (user_id) => {
  try {
    const res = await axios.delete(
      `${API_URL}/api/pacientes/delete/${user_id}`
    );
    const body = await res.data;
    if (res.status === 200) {
      return {
        labasis: {
          success: body.success,
          code: body.code,
          message: body.message,
          status: body.status,
          data: body.data,
        },
      };
    } else {
      return {
        labasis: {
          success: false,
          code: body.code,
          message: body.message,
          status: body.status,
          data: null,
        },
      };
    }
  } catch (err) {
    if (err.response) {
      return {
        labasis: {
          success: false,
          code: err.response.data.code || 500,
          message: err.response.data.message || "Ocurrio un error inesperado",
          status: err.response.data.status || 500,
          data: null,
        },
      };
    } else {
      return {
        labasis: {
          success: false,
          code: 500,
          message: err.message || "Opps! Algo salió mal, intente más tarde.",
          status: "error",
          data: null,
        },
      };
    }
  }
};
