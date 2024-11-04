import Lottie from "lottie-react";
const CardCarousel = ({ title, subtitle, lottieImg, text, dark = false }) => {
  return (
    <div
      className={`flex flex-col md:flex-row-reverse items-center md:mx-20 px-5 ${
        dark ? "bg-slate-600" : "bg-white bg-opacity-25"
      }`}
    >
      <Lottie
        animationData={lottieImg}
        className="mx-auto md:h-[350px] md:w-[350px] w-[200px] h-[200px]"
      />
      <div className="w-full md:w-1/2">
        <h1 className="md:text-5xl text-2xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
          {title}
          <span className="bg-landing leading-snug">&nbsp;{subtitle}</span>
        </h1>
        <p className="text-neutral-600 md:text-base text-sm">{text}</p>
      </div>
    </div>
  );
};

export default CardCarousel;
