// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import customerService from "../assets/customer-service.png";
import HomePageA from "../assets/home-page-images/Homepage-a.jpg";
import HomePageB from "../assets/home-page-images/Homepage-b.jpg";
import HomePageC from "../assets/home-page-images/Homepage-c.jpg";
import HomePageD from "../assets/home-page-images/Homepage-d.jpg";
import HomepageE from "../assets/home-page-images/Homepage-e.jpg";
import HeadShotA from "../assets/home-page-images/head-shots/shot-a.jpg";
import HeadShotB from "../assets/home-page-images/head-shots/shot-b.jpg";
import HeadShotC from "../assets/home-page-images/head-shots/shot-c.jpg";
import HeadShotD from "../assets/home-page-images/head-shots/shot-d.jpg";
import HeadShotE from "../assets/home-page-images/head-shots/shot-e.jpg";
import image1 from "../assets/image1.png";
import knight from "../assets/knight.png";
import systematization from "../assets/systematization.png";
import ServiceCard from "../components/cards/service-card";
import TestimonialCard from "../components/cards/testimonial-card";

export default function HomePage() {
  const pagination = {
    clickable: true,
    renderBullet: function (_index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="grid min-h-dvh place-content-center bg-primary/60 bg-cover bg-center pt-16 text-center text-white bg-blend-overlay"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <h2 className="font-sans font-bold uppercase sm:text-lg">
          Welcome to BrightByte
        </h2>
        <p className="pt-3 text-xl font-bold leading-none sm:text-4xl lg:text-7xl">
          Best Digital Technology <br /> Agency
        </p>

        <a
          href="#more"
          className="mx-auto mt-14 w-min whitespace-nowrap bg-white px-10 py-3 font-bold text-primary"
        >
          Read more
        </a>
      </div>

      {/* Body 1 Section */}
      <div className="section-layout pt-20" id="more">
        <span className="font-bold text-primary">About Us</span>
        <p className="mt-5 font-bold md:text-2xl lg:text-4xl">
          We' re Delivering only <br className="hidden sm:block" /> Exceptional
          Quality Work
        </p>
        <div className="relative grid grid-cols-4 gap-10 py-10">
          <div className="col-span-4 lg:col-span-3">
            <img
              src={HomePageA}
              alt="Image 1"
              className="h-[450px] w-full object-cover"
            />
          </div>

          <div className="col-span-4 text-gray-500 md:col-span-2 lg:col-span-1">
            <p>
              At BrightByte Agency, we turn ideas into digital success. From web
              development to marketing strategies, our expert team helps
              businesses thrive online.
            </p>
            <p className="mt-8">Let's bring your vision to life.</p>

            <button className="mt-5 font-bold text-primary">Read more</button>
          </div>

          <div className="col-span-full md:col-span-2 lg:py-20">
            <div className="right-0 top-1/2 col-span-4 grid items-center justify-center gap-5 bg-primary p-7 text-center  text-white sm:col-span-2 md:grid-cols-2 md:text-start lg:absolute lg:gap-10 lg:p-14">
              <div className="font-bold">
                <span>People</span>
                <h1 className="py-5 text-3xl">254+</h1>
                <h2>Redefining digital success</h2>
              </div>
              <div className="font-bold">
                <span>World Offices</span>
                <h1 className="py-5 text-3xl">12</h1>
                <h2>Embracing cutting edge technologies</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body 2 section */}
      <div className="bg-gray-200">
        <div className="section-layout grid items-stretch gap-10 bg-gray-200 py-28 lg:grid-cols-2">
          <img
            src={HomePageB}
            alt="Image 1"
            className="max-h-96 w-full object-cover"
          />
          <div className="grid items-center">
            <div>
              <span className="font-bold text-primary">Why Choose Us</span>
              <p className="mt-5 text-2xl font-bold sm:text-4xl">
                Benefits Of Choosing <br /> Our Agency
              </p>
              <p className="mt-8">
                At BrightByte, we provide customized digital solutions designed
                to grow your business. With expert strategies, innovative
                technology, and a focus on quality, we ensure your brand stands
                out in the digital landscape. Our dedicated team works closely
                with you to deliver results that matter.
              </p>
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

          <p className="mt-5">
            At BrightByte, we focus on understanding your goals and delivering
            tailored digital solutions that drive growth. With a client-first
            approach, we’re committed to helping your business thrive.
          </p>

          <button className="mt-10 bg-primary px-10 py-3 font-bold text-white">
            Read more
          </button>
        </div>
        <div>
          <img src={HomePageC} alt="Image 1" />
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
                position={() => "Strategy planner | RetailRevamp"}
                image={HeadShotA}
                description={
                  " We revamped RetailRevamp’s website and marketing strategy, leading to a 40% boost in sales in just three months."
                }
              />
            </div>
            <img
              src={HomePageD}
              alt="image 1"
              className="order-2 object-cover lg:h-full"
            />
            <img
              src={HomepageE}
              alt="image 1"
              className="order-4 object-cover lg:order-3 lg:h-full"
            />

            <div className="order-3 lg:order-4">
              <ServiceCard
                reduceImage={true}
                showButton={true}
                position={() => "Senior Response consultant | AppVantage"}
                image={HeadShotB}
                description={
                  "For AppVantage, we developed a user-friendly app that quickly gained 10,000 downloads in its first month, accelerating their growth."
                }
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
        <p className="my-4 text-2xl font-bold sm:text-4xl">
          What Our Clients Say
        </p>

        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="w-full pb-10"
        >
          <SwiperSlide>
            <TestimonialCard
              name="Emma Johansson"
              country="Sweden"
              image={HeadShotC}
              description={
                "Working with BrightByte has been a game-changer for our business. Their innovative approach and dedication to our success resulted in a stunning website that has significantly increased our customer engagement. Highly recommend!"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Luis Garcia"
              country="Mexico"
              image={HeadShotD}
              description={
                "The team at BrightByte delivered exceptional results for our digital marketing campaign. Their expertise helped us reach a broader audience and boost our sales. Their support was outstanding throughout the entire process."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Ayesha Khan"
              country="UAE"
              image={HeadShotE}
              description={
                "We were impressed by BrightByte’s professionalism and creativity. They developed a powerful app for us that exceeded our expectations and has become a key part of our business strategy. Excellent service and results!"
              }
            />
          </SwiperSlide>
        </Swiper>
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
            <p className="text-pretty py-5 text-center">
              At BrightByte, we craft bespoke websites that blend stunning
              visuals with seamless functionality. Our team handles every step,
              ensuring your site not only looks great but performs flawlessly
              across all platforms.
            </p>
            <div className="mt-10 grid gap-16 text-pretty sm:grid-cols-3">
              <ServiceCard
                reduceImage={true}
                showButton={false}
                position={() => "Dynamic Functionality Designer | TechNova"}
                image={knight}
                description={
                  "We redesigned TechNova’s outdated website and optimized their SEO. The result? A 50% increase in organic traffic and a more engaging user experience that drove conversions."
                }
              />
              <ServiceCard
                reduceImage={true}
                showButton={false}
                position={() => "Creative Agent | GreenEco"}
                description={
                  "For GreenEco, we created a dynamic social media campaign that boosted brand awareness and engagement. Within two months, their social media following grew by 60%, significantly enhancing their market presence."
                }
                image={customerService}
              />
              <ServiceCard
                reduceImage={true}
                showButton={false}
                position={() => "Marketing Assistant | HealthBoost"}
                description={
                  "We developed a streamlined appointment booking system for HealthBoost, making it easier for patients to schedule visits. This improved their booking efficiency by 30% and enhanced overall patient satisfaction."
                }
                image={systematization}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
