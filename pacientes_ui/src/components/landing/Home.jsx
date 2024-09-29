import { Carousel } from "flowbite-react";
import Lottie from "lottie-react";
import laptopLottie from "../../assets/lottie/laptop.json";
import doctorLottie from "../../assets/lottie/doctor.json";
import adminLottie from "../../assets/lottie/admin.json";
const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="">
              <Lottie
                animationData={laptopLottie}
                className="max-w-xs mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Experiencia
                <span className="text-brandPrimary leading-snug">
                  &nbsp;de +10 años
                </span>
              </h1>
              <p className="text-neutral-600 text-base mb-8">
                Con un equipo de profesionales altamente capacitados y
                comprometidos, ofrecemos una amplia gama de servicios médicos
                que incluyen atención primaria, especialidades médicas, y
                servicios de diagnóstico avanzados.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="">
              <Lottie
                animationData={doctorLottie}
                className="max-w-xs mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Experiencia
                <span className="text-brandPrimary leading-snug">
                  &nbsp;de +10 años
                </span>
              </h1>
              <p className="text-neutral-600 text-base mb-8">
                Con un equipo de profesionales altamente capacitados y
                comprometidos, ofrecemos una amplia gama de servicios médicos
                que incluyen atención primaria, especialidades médicas, y
                servicios de diagnóstico avanzados.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="">
              <Lottie
                animationData={adminLottie}
                className="max-w-xs mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Experiencia
                <span className="text-brandPrimary leading-snug">
                  &nbsp;de +10 años
                </span>
              </h1>
              <p className="text-neutral-600 text-base mb-8">
                Con un equipo de profesionales altamente capacitados y
                comprometidos, ofrecemos una amplia gama de servicios médicos
                que incluyen atención primaria, especialidades médicas, y
                servicios de diagnóstico avanzados.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
