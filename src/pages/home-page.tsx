import { faker } from "@faker-js/faker";

import image2 from "../assets/headShot.png";
import image1 from "../assets/image1.png";
import ServiceCard from "../components/cards/service-card";
import TestimonialCard from "../components/cards/testimonial-card";
import { photo, position } from "../data/fake-data";

export default function HomePage() {
  const randomDescription = faker.word.words(30);
  const randomExtraSmallDescription = faker.word.words(10);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-custom-hero max-h-[800px]  bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="size-full bg-primary/60 py-10 text-center text-white">
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="font-sans font-bold uppercase sm:text-lg">
                Welcome to digital startup agency
              </h2>
              <p className="pt-3 text-xl font-bold leading-none sm:text-4xl lg:text-7xl">
                Best Digital Technology <br /> Agency
              </p>

              <button className="mt-14 bg-white px-10 py-3 font-bold text-primary">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Body 1 Section */}
      <div className="section-layout mt-20">
        <span className="font-bold text-primary">About Us</span>
        <p className="mt-5 font-bold md:text-2xl lg:text-4xl">
          We' re Delivering only <br className="hidden sm:block" /> Exceptional
          Quality Work
        </p>
        <div className="relative grid grid-cols-4 gap-10 py-10">
          <div className="col-span-4 lg:col-span-3">
            <img
              src={image1}
              alt="Image 1"
              className="h-[450px] w-full object-cover"
            />
          </div>

          <div className="col-span-4 text-gray-500 md:col-span-2 lg:col-span-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              molestiae placeat temporibus fugit! Consectetur quidem quam non.
            </p>
            <p className="mt-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>

            <button className="mt-5 font-bold text-primary">Read more</button>
          </div>

          <div className="col-span-full md:col-span-2 lg:py-20">
            <div className="right-0 top-1/2 col-span-4 grid items-center justify-center gap-5 bg-primary p-7 text-center  text-white sm:col-span-2 md:grid-cols-2 md:text-start lg:absolute lg:gap-10 lg:p-14">
              <div className="font-bold">
                <span>People</span>
                <h1 className="py-5 text-3xl">254+</h1>
                <h2>Lorem ipsum dolor Lorem</h2>
              </div>
              <div className="font-bold">
                <span>World Offices</span>
                <h1 className="py-5 text-3xl">12</h1>
                <h2>Lorem ipsum dolor Lorem</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body 2 section */}
      <div className="bg-gray-200">
        <div className="section-layout grid items-stretch gap-10 bg-gray-200 py-28 lg:grid-cols-2">
          <img
            src={image1}
            alt="Image 1"
            className="max-h-96 w-full object-cover"
          />
          <div className="grid items-center">
            <div>
              <span className="font-bold text-primary">Why Choose Us</span>
              <p className="mt-5 text-2xl font-bold sm:text-4xl">
                Benefits Of Choosing <br /> Our Agency
              </p>
              <p className="mt-8">{randomDescription}</p>
              <div className="mt-7 font-semibold">
                <h2>Locally Recommended</h2>
                <progress
                  className="progress progress-info h-4 w-full md:w-80"
                  value="80"
                  max="100"
                ></progress>
                <h2 className="mt-5">Projects Completed Successfully</h2>
                <progress
                  className="progress progress-info h-4 w-full md:w-80"
                  value="90"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body 3 section */}

      <div className="section-layout grid items-center gap-10 py-28 md:grid-cols-2">
        <div>
          <span className="font-bold text-primary">About Our Company</span>
          <p className="mt-5 text-pretty text-2xl font-bold sm:text-4xl">
            Your Success Is <br className="hidden sm:block" /> Our Mission
          </p>

          <p className="mt-5">{randomDescription}</p>

          <button className="mt-10 bg-primary px-10 py-3 font-bold text-white">
            Read more
          </button>
        </div>
        <div>
          <img src={image1} alt="Image 1" />
        </div>
      </div>

      {/* Body 4 section */}

      <div className="bg-gray-200">
        <div className="section-layout py-20">
          <div className="text-center">
            <span className="font-bold text-secondary">What we do</span>
            <p className="mt-5 text-2xl font-bold sm:text-4xl">
              We Provide <br /> Invest & Business Services
            </p>
          </div>
          <div className="my-10 grid gap-5 lg:grid-cols-2">
            <div className="order-1">
              <ServiceCard
                reduceImage={true}
                showButton={true}
                position={position}
                image={image2}
                description={randomDescription}
              />
            </div>
            <img
              src={image1}
              alt="image 1"
              className="order-2 object-cover lg:h-full"
            />
            <img
              src={image1}
              alt="image 1"
              className="order-4 object-cover lg:order-3 lg:h-full"
            />

            <div className="order-3 lg:order-4">
              <ServiceCard
                reduceImage={true}
                showButton={true}
                position={position}
                image={image2}
                description={randomDescription}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Body 5 section */}

      <div className="section-layout grid items-center justify-center gap-10 py-28 text-center">
        <span className="font-bold text-primary hover:text-secondary">
          Testimonials
        </span>

        <TestimonialCard image={image2} description={randomDescription} />
      </div>

      {/* Body 6 section */}

      <div className="bg-gray-200">
        <div className="section-layout grid items-center justify-center gap-10 py-28 text-center">
          <div className="">
            <span className="font-bold text-primary">
              Why Business choose Us
            </span>
            <p className="my-4 text-pretty text-2xl font-bold sm:text-4xl">
              Jumpstart Your Business
            </p>
            <p className="text-pretty py-5 text-center">{randomDescription}</p>
            <div className="mt-10 grid gap-16 text-pretty sm:grid-cols-3">
              <ServiceCard
                reduceImage={true}
                showButton={false}
                position={position}
                image={photo()}
                description={randomExtraSmallDescription}
              />
              <ServiceCard
                reduceImage={true}
                showButton={false}
                position={position}
                description={randomExtraSmallDescription}
                image={photo()}
              />
              <ServiceCard
                reduceImage={true}
                showButton={false}
                position={position}
                description={randomExtraSmallDescription}
                image={photo()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
