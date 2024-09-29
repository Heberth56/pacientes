import Lottie from "lottie-react";
import aboutLottie from "../../assets/lottie/about-1.json";
import gearsLottie from "../../assets/lottie/gear.json";
const About = () => {
  return (
    <div id="about">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <Lottie animationData={aboutLottie} className="max-w-xs mx-auto" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              Clínica con especialistas en el area
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit
              sed iusto necessitatibus? Deserunt non reiciendis, excepturi iusto
              quae fugiat sint vitae architecto eos vero consectetur dolorum
              magnam laudantium exercitationem.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-10">
        <div className="flex md:flex-row flex-col items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              Consultas Aplicadas <br />
              <span className="text-brandPrimary">Ayudas Especializadas</span>
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-8">
              Hemos alcanzado nuestros objetivos gracias a nuestro arduo trabajo
              y dedicación constante.
            </p>
          </div>
          <div className="md:w-1/2 flex">
            <Lottie animationData={gearsLottie} className="max-w-xs mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
