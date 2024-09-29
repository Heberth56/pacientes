import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiagnosticDataThunk } from "../app/slice/testSlice";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import toast, { Toaster } from "react-hot-toast";
import telescopyLottie from "../assets/lottie/telescopy.json";
import { RiAlignItemHorizontalCenterFill } from "react-icons/ri";
import QRCode from "qrcode.react";

const Title = ({ title, children }) => {
  return (
    <div className="">
      <strong className="flex gap-2 items-center text-blue-400">
        <RiAlignItemHorizontalCenterFill />
        {title}
      </strong>
      {children}
    </div>
  );
};
const Diagnostico = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const location = useLocation();
  const qrRef = useRef();

  const fullUrl = `${window.location.protocol}//${window.location.host}${location.pathname}${location.search}${location.hash}`;

  const { data, isLoading, error, message } = useSelector(
    (state) => state.testSlice
  );

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  useEffect(() => {
    if (param.test_id) dispatch(getDiagnosticDataThunk(param.test_id));
  }, [param]);

  if (isLoading) return;

  return (
    <div className="shadow-xl p-5 bg-slate-50 rounded-md">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col md:w-1/3 items-center justify-center">
          <Lottie
            animationData={telescopyLottie}
            className="w-[210px] h-[210px]"
          />
          <strong>LABORATORIO CLÍNICO</strong>
          <span>"VIRGEN DE COTOCA"</span>
        </div>
        <div>
          <h1 className="text-center text-xl font-bold text-cyan-600">
            DIAGNÓSTICO PERSONAL
          </h1>
          <hr className="mb-5" />
          <div
            ref={qrRef}
            className="flex flex-col items-center justify-center my-5"
          >
            <QRCode
              value={fullUrl}
              size={120}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />
            <button
              onClick={downloadQRCode}
              className="bg-green-400 text-white rounded-md py-1 px-3 text-sm"
            >
              Descargar Código QR
            </button>
          </div>

          <div className="flex items-center gap-5">
            <Title title="Fecha:">
              <span className="text-normal">{data?.created_at || ""}</span>
            </Title>

            <Title title="Edad:">
              <span className="text-normal">{data?.age || ""}</span>
            </Title>

            <Title title="Paciente:">
              <span className="text-normal">{data?.patient || ""}</span>
            </Title>

            <Title title="Médico encargado:">
              <span className="text-normal">{data?.medico || ""}</span>
            </Title>
          </div>

          <Title title="Diagnóstico:">
            <span className="text-normal">{data?.diagnostic || ""}</span>
          </Title>

          <Title title="Examenes Solicitados:">
            {data?.temas?.map((elem, index) => (
              <span className="text-normal" key={index}>
                - {elem}
              </span>
            ))}
          </Title>
        </div>
      </div>
    </div>
  );
};

export default Diagnostico;
