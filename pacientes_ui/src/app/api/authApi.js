import axios from "axios";

export const authApiLogin = async (username, password) => {
  try {
    const res = await axios.post(`http://127.0.0.1:8000/api/login/`, {
      username,
      password,
    });

    const body = await res.data;

    if (res.status === 200) {
      // localStorage.setItem("ceam_token", body.data.token);
      return {
        futuresyo: {
          success: true,
          code: body.code,
          message: body.message,
          status: body.status,
          data: body.data.user,
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
