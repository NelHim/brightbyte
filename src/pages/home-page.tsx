/* eslint-disable tailwindcss/classnames-order */
import { faker } from "@faker-js/faker";

import image2 from "../assets/headShot.png";
import image1 from "../assets/image1.png";
import { photo } from "../data/fake-data";

export default function HomePage() {
  const randomDescription = faker.word.words(30);
  const randomSmallDescription = faker.word.words(15);
  const randomExtraSmallDescription = faker.word.words(10);
  const randomPhrase = faker.company.buzzPhrase();

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-custom-hero max-h-[800px]  bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="size-full bg-primary/60 text-center py-10 text-white">
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="font-sans sm:text-lg font-bold uppercase">
                Welcome to digital startup agency
              </h2>
              <p className="pt-3 text-xl sm:text-4xl lg:text-7xl font-bold leading-none">
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
      <div className="mt-20 section-layout">
        <span className="font-bold text-primary">About Us</span>
        <p className="mt-5 md:text-2xl lg:text-4xl font-bold">
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

          <div className="text-gray-500 col-span-4 md:col-span-2 lg:col-span-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              molestiae placeat temporibus fugit! Consectetur quidem quam non.
            </p>
            <p className="mt-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>

            <button className="mt-5 font-bold text-primary">Read more</button>
          </div>

          <div className="lg:py-20 col-span-full md:col-span-2">
            <div className="lg:absolute top-1/2 right-0 col-span-4 sm:col-span-2 grid items-center justify-center text-center md:text-start  md:grid-cols-2 gap-5 lg:gap-10 bg-primary p-7 lg:p-14 text-white">
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
        <div className="grid items-stretch lg:grid-cols-2 gap-10 bg-gray-200 section-layout py-28">
          <img
            src={image1}
            alt="Image 1"
            className="max-h-96 w-full object-cover"
          />
          <div className="grid items-center">
            <div>
              <span className="font-bold text-primary">Why Choose Us</span>
              <p className="mt-5 text-2xl sm:text-4xl font-bold">
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

      <div className="grid md:grid-cols-2 items-center gap-10 section-layout py-28">
        <div>
          <span className="font-bold text-primary">About Our Company</span>
          <p className="mt-5 text-pretty text-2xl sm:text-4xl font-bold">
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
            <p className="mt-5 text-2xl sm:text-4xl font-bold">
              We Provide <br /> Invest & Business Services
            </p>
          </div>
          <div className="grid lg:grid-cols-2 my-10 gap-5">
            <div className="flex flex-col items-center justify-center bg-white py-20 px-5 order-1">
              <img
                src={image2}
                alt="Image 1"
                className="size-20 rounded-full object-cover"
              />
              <h2 className="font-bold mt-4">Marketing Strategy</h2>
              <p className="text-center py-5 text-pretty">
                {randomDescription}
              </p>
              <button className=" bg-secondary px-10 py-3 font-bold text-white">
                Read more
              </button>
            </div>
            <img
              src={image1}
              alt="image 1"
              className="h-full object-cover order-2"
            />
            <img
              src={image1}
              alt="image 1"
              className="h-full object-cover order-4 lg:order-3"
            />
            <div className="flex flex-col items-center justify-center bg-white py-20 px-5 order-3 lg:order-4">
              <img
                src={image2}
                alt="Image 1"
                className="size-20 rounded-full object-cover"
              />
              <h2 className="font-bold mt-4">Management</h2>
              <p className="text-center py-5 text-pretty">
                {randomDescription}
              </p>
              <button className=" bg-primary px-10 py-3 font-bold text-white">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Body 5 section */}

      <div className="grid justify-center text-center items-center gap-10 section-layout py-28">
        <div className="sm:w-11/12 mx-auto">
          <span className="font-bold text-primary">Testimonials</span>
          <p className="my-4 text-2xl sm:text-4xl font-bold">
            What Our Clients Say
          </p>
          <div className="grid justify-center my-5">
            <img
              src={image2}
              alt="Image 2"
              className="size-20 rounded-full object-cover"
            />
          </div>
          <p className="text-center py-5">{randomDescription}</p>

          <div>
            <h2 className="font-bold">Carolyn Stewart</h2>
            <h3>United States</h3>
          </div>
        </div>
      </div>

      {/* Body 6 section */}

      <div className="bg-gray-200">
        <div className="grid justify-center text-center items-center gap-10 section-layout py-28">
          <div className="">
            <span className="font-bold text-primary">
              Why Business choose Us
            </span>
            <p className="my-4 text-2xl text-pretty sm:text-4xl font-bold">
              Jumpstart Your Business
            </p>
            <p className="text-center py-5 text-pretty">{randomDescription}</p>
            <div className="grid sm:grid-cols-3 mt-10 gap-16 text-prettyp">
              <div className="flex flex-col items-center">
                <img
                  src={photo()}
                  alt="Image 1"
                  className="size-20 rounded-full object-cover"
                />
                <h2 className="font-bold mt-4">Management</h2>
                <p className="text-center py-5">
                  {randomExtraSmallDescription}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={image2}
                  alt="Image 1"
                  className="size-20 rounded-full object-cover"
                />
                <h2 className="font-bold mt-4">Management</h2>
                <p className="text-center py-5">
                  {randomExtraSmallDescription}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={image2}
                  alt="Image 1"
                  className="size-20 rounded-full object-cover"
                />
                <h2 className="font-bold mt-4">Management</h2>
                <p className="text-center py-5">
                  {randomExtraSmallDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
