import axios from "axios";
import { API_URL } from "../../config";
export const getSpecialtyTemaApi = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/examen/list/`);
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

export const createTestApi = async (payload) => {
  try {
    const res = await axios.post(`${API_URL}/api/examen/create/`, payload);
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

export const getTestsApi = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/examen/listado/`);
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

export const getDiagnosticApi = async (test_id) => {
  try {
    const res = await axios.get(`${API_URL}/api/examen/diagnostic/${test_id}`);
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

export const testPatient = async (cedula) => {
  try {
    const res = await axios.get(
      `${API_URL}/api/examen/list-diagnostic/${cedula}`
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
