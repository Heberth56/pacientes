import axios from "axios";
import { API_URL } from "../../config";

export const createTemaApi = async (payload) => {
  try {
    const res = await axios.post(`${API_URL}/api/temas/create/`, payload);
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

export const editTemaApi = async (tema_id, payload) => {
  try {
    const res = await axios.put(
      `${API_URL}/api/temas/edit/${tema_id}`,
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

export const getTemasApi = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/temas/list/`);
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

export const getTemaApi = async (tema_id) => {
  try {
    const res = await axios.get(`${API_URL}/api/temas/list/${tema_id}`);
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

export const deleteTemaApi = async (tema_id) => {
  try {
    const res = await axios.delete(`${API_URL}/api/temas/delete/${tema_id}`);
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
