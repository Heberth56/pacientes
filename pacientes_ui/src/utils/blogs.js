import imageOne from "../assets/images/bg-lab-1.jpeg";
import imageTwo from "../assets/images/bg-lab-2.jpeg";
import imageThree from "../assets/images/bg-lab-3.jpeg";

import Carousel1 from "../assets/images/carousel-1.jpg";
import Carousel2 from "../assets/images/carousel-2.jpg";
import Carousel3 from "../assets/images/carousel-3.jpg";

import laptopLottie from "../assets/lottie/laptop.json";
import doctorLottie from "../assets/lottie/doctor.json";
import adminLottie from "../assets/lottie/admin.json";
export const blogs = [
  {
    id: 3,
    title: "Misión",
    description:
      "Mejorar la calidad de vida de la población al ofrecer servicios clínicos de alta calidad y realizar análisis confiables, confidenciales y oportunos en el campo del Laboratorio Clínico. Nos comprometemos a utilizar tecnología de vanguardia y contar con un equipo humano capacitado, motivado y comprometido, guiado por procesos de calidad, principios y valores éticos.",
    image: imageOne,
  },
  {
    id: 4,
    title: "Visión",
    description:
      "Ser un laboratorio distinguido por prestar atención de alta calidad de servicio, respaldado por una sólida trayectoria y los logros consolidados a lo largo de los años. Nos esforzamos por convertirnos en el laboratorio clínico líder, reconocido por ofrecer un servicio de excelencia y calidad sobresaliente.",
    image: imageTwo,
  },
  {
    id: 5,
    title: "Objetivo",
    description:
      "Nuestro objetivo es ser el referente en la provisión de servicios de salud que contribuyan a mejorar la calidad de vida de nuestros pacientes y promuevan su bienestar.",
    image: imageThree,
  },
];

export const carouselContent = [
  {
    id: 1,
    title: "Experiencia",
    subtitle: "de +10 años",
    text: "Con un equipo de profesionales altamente capacitados y comprometidos, ofrecemos una amplia gama de servicios médicos que incluyen atención primaria, especialidades médicas, y servicios de diagnóstico avanzados.",
    lottieImg: laptopLottie,
    bgImg: Carousel1,
  },
  {
    id: 2,
    title: "Especialistas",
    subtitle: "profesionales adecuados al área",
    text: "Con un equipo de profesionales altamente capacitados y comprometidos, ofrecemos una amplia gama de servicios médicos que incluyen atención primaria, especialidades médicas, y servicios de diagnóstico avanzados.",
    lottieImg: doctorLottie,
    bgImg: Carousel2,
  },
  {
    id: 3,
    title: "Servicios-",
    subtitle: "atención completa",
    text: "Con un equipo de profesionales altamente capacitados y comprometidos, ofrecemos una amplia gama de servicios médicos que incluyen atención primaria, especialidades médicas, y servicios de diagnóstico avanzados.",
    lottieImg: adminLottie,
    bgImg: Carousel3,
  },
];
