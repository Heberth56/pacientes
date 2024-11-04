import axios from "axios";
import { API_URL } from "../../config";
export const reportApi = async (testId) => {
  try {
    const res = await axios.get(`${API_URL}/api/reportes/consult/${testId}`, {
      responseType: "blob",
    });
    const url = URL.createObjectURL(
      new Blob([res.data], { type: "application/pdf" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `reporte_${testId}.pdf`);
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(link);

    if (res.status === 200) {
      return {
        futuresyo: {
          success: true,
          code: 200,
          message: "Archivo descargado correctamente",
          status: 200,
          data: null,
        },
      };
    } else {
      return {
        futuresyo: {
          success: false,
          code: 200,
          message: "Ocurrio un error inesperado",
          status: 200,
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
