import { Carousel } from "flowbite-react";
import { carouselContent } from "../../utils/blogs";
import CardCarousel from "./CardCarousel";

const Home = () => {
  return (
    <div className="h-screen" id="home">
      <Carousel>
        {carouselContent.map((elem) => (
          <div
            key={elem.id}
            className="h-full flex items-center px-5"
            style={{
              backgroundImage: `url(${elem.bgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <CardCarousel
              title={elem.title}
              subtitle={elem.subtitle}
              lottieImg={elem.lottieImg}
              text={elem.text}
              dark={elem.dark}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
