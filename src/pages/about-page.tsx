import image3 from "../assets/agreement.png";
import brainstorm1 from "../assets/brainstorming1.png";
import brainstorm2 from "../assets/brainstorming2.png";
import brainstorm3 from "../assets/brainstorming3.png";
import image1 from "../assets/image1.png";
import woman1 from "../assets/woman1.png";
import woman2 from "../assets/woman2.png";
import woman3 from "../assets/woman3.png";
import woman4 from "../assets/woman4.png";
import {
  randomDescription,
  randomEmail,
  randomFullName,
  randomSmallDescription,
} from "../data/fake-data";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-custom-hero bg-cover bg-center xl:max-h-[800px]"
        style={{ backgroundImage: `url(${brainstorm1})` }}
      >
        <div className="size-full bg-primary/60 text-center text-white">
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <p className="pt-3 text-7xl font-bold leading-none">About Us</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body 1 Section */}

      <div className="section-layout grid grid-cols-3 gap-10 py-28 ">
        <div className="flex flex-col items-center justify-center">
          <img src={brainstorm2} alt="Image 1" className=" object-cover" />
          <h2 className="mt-4 font-bold">Website Development</h2>
          <p className="py-5 text-center">{randomSmallDescription}</p>
          <button className=" bg-secondary px-8 py-2 font-bold text-white">
            Read more
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={brainstorm1} alt="Image 1" className=" object-cover" />
          <h2 className="mt-4 font-bold">Marketing Solutions</h2>
          <p className="py-5 text-center">{randomSmallDescription}</p>
          <button className=" bg-primary px-8 py-2 font-bold text-white">
            Read more
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={brainstorm3}
            alt="Image 1"
            className="h-full object-cover"
          />
          <h2 className="mt-4 font-bold">Application Development</h2>
          <p className="py-5 text-center">{randomSmallDescription}</p>
          <button className=" bg-primary px-8 py-2 font-bold text-white">
            Read more
          </button>
        </div>
      </div>

      {/* Body 2 Section */}

      <div className="bg-gray-200">
        <div className="section-layout grid grid-cols-2 gap-10 py-28">
          <div>
            <span className="font-bold text-primary">
              We provide digital services
            </span>
            <p className="mt-5 text-4xl font-bold">
              Services We're <br /> Offering
            </p>
            <div className="mt-10">
              <img src={image1} alt="Image 1" />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <img src={brainstorm3} alt="Brain storm 1" />
            <div className="mt-8 text-sm">
              <p>{randomDescription}</p>
              <p className="mt-8">{randomSmallDescription}</p>
            </div>
            <button className="mt-2 w-48 bg-primary px-8 py-2 font-bold text-white">
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Body 3 Section */}

      <div className="section-layout py-28">
        <div className="text-center">
          <span className="font-bold text-primary">Our Team</span>
          <p className="mt-5 text-4xl font-bold">Meet Our Team</p>
        </div>

        <div className="mt-20 flex justify-between">
          <div>
            <img
              src={woman1}
              alt="Woman 1"
              className="h-80 w-64 object-cover"
            />
            <div className="mt-3 text-center">
              <h1 className="font-bold">{randomFullName}</h1>
              <h2>{randomEmail}</h2>
            </div>
          </div>
          <div>
            <img
              src={woman2}
              alt="Woman 1"
              className="h-80 w-64 object-cover"
            />
            <div className="mt-3 text-center">
              <h1 className="font-bold">{randomFullName}</h1>
              <h2>{randomEmail}</h2>
            </div>
          </div>
          <div>
            <img
              src={woman3}
              alt="Woman 1"
              className="h-80 w-64 object-cover"
            />
            <div className="mt-3 text-center">
              <h1 className="font-bold">{randomFullName}</h1>
              <h2>{randomEmail}</h2>
            </div>
          </div>
          <div>
            <img
              src={woman4}
              alt="Woman 1"
              className="h-80 w-64 object-cover"
            />
            <div className="mt-3 text-center">
              <h1 className="font-bold">{randomFullName}</h1>
              <h2>{randomEmail}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Body 4 Section */}

      <div className="bg-gray-200">
        <div className="section-layout  py-28">
          <div className="text-center">
            <span className="font-bold text-primary">Over Articles</span>
            <p className="mt-5 text-4xl font-bold">Over Latest News</p>
          </div>
          <div className="mt-14 flex justify-center gap-12">
            <div className="w-64">
              <img
                src={brainstorm2}
                alt="Brainstorming 2"
                className="h-48 object-cover"
              />
              <div className="bg-white text-sm">
                <div className="p-5">
                  <span className="font-bold">
                    Business Intelligence in Mobile App Development
                  </span>
                  <p className="mt-3">{randomSmallDescription}</p>
                  <button className=" mt-3 bg-primary px-8 py-2 font-bold text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="w-64">
              <img
                src={brainstorm1}
                alt="Brainstorming 2"
                className="h-48  object-cover"
              />
              <div className="bg-white text-sm">
                <div className="p-5">
                  <span className="font-bold">
                    5 reasons why app developers should partner
                  </span>
                  <p className="mt-3">{randomSmallDescription}</p>
                  <button className=" mt-3 bg-primary px-8 py-2 font-bold text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="w-64">
              <img
                src={brainstorm3}
                alt="Brainstorming 2"
                className="h-48  object-cover"
              />
              <div className="bg-white text-sm">
                <div className="p-5">
                  <span className="font-bold">
                    12 Web development trends for 2024
                  </span>
                  <p className="mt-3">{randomSmallDescription}</p>
                  <button className=" mt-3 bg-primary px-8 py-2 font-bold text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="w-64">
              <img
                src={image3}
                alt="Brainstorming 2"
                className="h-48 object-cover"
              />
              <div className="bg-white text-sm">
                <div className="p-5">
                  <span className="font-bold">
                    12 Web development trends for 2024
                  </span>
                  <p className="mt-3">{randomSmallDescription}</p>
                  <button className=" mt-3 bg-primary px-8 py-2 font-bold text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
