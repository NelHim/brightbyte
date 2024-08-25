import image3 from "../assets/agreement.png";
import image2 from "../assets/headShot.png";
import image1 from "../assets/image1.png";
import ServiceCard from "../components/cards/service-card";
import { position, randomDescription } from "../data/fake-data";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section for services */}
      <div
        className="grid min-h-dvh place-content-center bg-primary/60 bg-cover bg-center pt-16 text-center text-white bg-blend-overlay"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <p className="pt-3 text-xl font-bold leading-none sm:text-4xl lg:text-7xl">
          Services
        </p>
      </div>

      {/* Body 1 Section */}

      <div className="bg-gray-200">
        <div className=" section-layout py-20">
          <div className="text-center">
            <span className="font-bold text-secondary">What we do</span>
            <p className="mt-5 font-bold md:text-2xl lg:text-4xl">
              We Provide <br /> Invest & Business Services
            </p>
          </div>
          <div className="my-10 grid gap-5 md:grid-cols-2">
            <div className="order-first">
              <ServiceCard
                reduceImage={true}
                showButton={true}
                position={position}
                description={randomDescription}
                image={image2}
              />
            </div>
            <div className="order-2">
              <img
                src={image1}
                alt="image 1"
                className="object-cover md:h-full"
              />
            </div>
            <div className="order-4 md:order-3">
              <img
                src={image1}
                alt="image 1"
                className="object-cover md:h-full"
              />
            </div>
            <div className="order-3 md:order-4">
              <ServiceCard
                reduceImage={true}
                showButton={true}
                position={position}
                description={randomDescription}
                image={image2}
              />
            </div>
            <div className="order-5">
              <ServiceCard
                reduceImage={true}
                showButton={true}
                position={position}
                description={randomDescription}
                image={image2}
              />
            </div>
            <div className="order-6">
              <img
                src={image1}
                alt="image 1"
                className="object-cover md:h-full"
              />
            </div>
            <div className="md:order-7">
              <img
                src={image1}
                alt="image 1"
                className="object-cover md:h-full"
              />
            </div>
            <div className="md:order-8">
              <ServiceCard
                reduceImage={true}
                showButton={true}
                position={position}
                description={randomDescription}
                image={image2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
