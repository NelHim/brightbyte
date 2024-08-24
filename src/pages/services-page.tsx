import image3 from "../assets/agreement.png";
import image2 from "../assets/headShot.png";
import image1 from "../assets/image1.png";
import { randomDescription } from "../data/fake-data";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section for services */}
      <div
        className="h-custom-hero bg-cover bg-center xl:max-h-[800px]"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="size-full bg-primary/60 text-center text-white">
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <p className="pt-3 text-7xl font-bold leading-none">Services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body 1 Section */}

      <div className="bg-gray-200">
        <div className=" section-layout py-20">
          <div className="text-center">
            <span className="font-bold text-secondary">What we do</span>
            <p className="mt-5 text-4xl font-bold">
              We Provide <br /> Invest & Business Services
            </p>
          </div>
          <div className="my-10 grid grid-cols-2 gap-5">
            <div className="flex flex-col items-center justify-center bg-white p-20">
              <img
                src={image2}
                alt="Image 1"
                className="size-20 rounded-full object-cover"
              />
              <h2 className="mt-4 font-bold">Marketing Strategy</h2>
              <p className="py-5 text-center">{randomDescription}</p>
              <button className=" bg-secondary px-10 py-3 font-bold text-white">
                Read more
              </button>
            </div>
            <div>
              <img src={image1} alt="image 1" className="h-full object-cover" />
            </div>
            <div>
              <img src={image1} alt="image 1" className="h-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-center bg-white p-20">
              <img
                src={image2}
                alt="Image 1"
                className="size-20 rounded-full object-cover"
              />
              <h2 className="mt-4 font-bold">Management</h2>
              <p className="py-5 text-center">{randomDescription}</p>
              <button className=" bg-primary px-10 py-3 font-bold text-white">
                Read more
              </button>
            </div>
            <div className="flex flex-col items-center justify-center bg-white p-20">
              <img
                src={image2}
                alt="Image 1"
                className="size-20 rounded-full object-cover"
              />
              <h2 className="mt-4 font-bold">Business Investment</h2>
              <p className="py-5 text-center">{randomDescription}</p>
              <button className=" bg-primary px-10 py-3 font-bold text-white">
                Read more
              </button>
            </div>
            <div>
              <img src={image1} alt="image 1" className="h-full object-cover" />
            </div>
            <div>
              <img src={image1} alt="image 1" className="h-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-center bg-white p-20">
              <img
                src={image2}
                alt="Image 1"
                className="size-20 rounded-full object-cover"
              />
              <h2 className="mt-4 font-bold">Research</h2>
              <p className="py-5 text-center">{randomDescription}</p>
              <button className=" bg-primary px-10 py-3 font-bold text-white">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Body 2 Section */}

      <div className="section-layout grid items-center justify-center gap-10 py-28 text-center ">
        <div className="w-[800px]">
          <span className="font-bold text-secondary">What Our Clients Say</span>
          <div className="my-5 grid justify-center">
            <img
              src={image2}
              alt="Image 2"
              className="size-20 rounded-full object-cover"
            />
          </div>
          <p className="py-5 text-center">{randomDescription}</p>

          <div>
            <h2 className="font-bold">Carolyn Stewart</h2>
            <h3>United States</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
