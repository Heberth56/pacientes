import axios from "axios";
import { API_URL } from "../../config";
export const authApiLogin = async (username, password) => {
  try {
    const res = await axios.post(`${API_URL}/api/login/`, {
      username,
      password,
    });

    const body = await res.data;

    if (res.status === 200) {
      localStorage.setItem("lab_data", JSON.stringify(body.data));
      return {
        futuresyo: {
          success: true,
          code: body.code,
          message: body.message,
          status: body.status,
          data: body.data,
        },
      };
    } else {
      return {
        futuresyo: {
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
        futuresyo: {
          success: false,
          code: err.response.data.code,
          message: err.response.data.message,
          status: err.response.data.status,
          data: null,
        },
      };
    } else {
      return {
        futuresyo: {
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
