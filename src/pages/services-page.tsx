import image3 from "../assets/agreement.png";
import ServicesA from "../assets/services-page-images/Service-a.jpg";
import ServicesB from "../assets/services-page-images/Service-b.jpg";
import ServicesC from "../assets/services-page-images/Service-c.jpg";
import ServicesD from "../assets/services-page-images/Service-d.jpg";
import HeadShotA from "../assets/services-page-images/head-shots/shot-a.jpg";
import HeadShotB from "../assets/services-page-images/head-shots/shot-b.jpg";
import HeadShotC from "../assets/services-page-images/head-shots/shot-c.jpg";
import HeadShotD from "../assets/services-page-images/head-shots/shot-d.jpg";
import ServiceCard from "../components/cards/service-card";

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
                position={() => "Lead Response Specialist | FashionFusion"}
                description={
                  "We revamped FashionFusion’s online store with a modern design and enhanced functionality. The upgrade resulted in a 45% increase in online sales and a more intuitive shopping experience for their customers."
                }
                image={HeadShotA}
              />
            </div>
            <div className="order-2">
              <img
                src={ServicesA}
                alt="image 1"
                className="object-cover md:h-full"
              />
            </div>
            <div className="order-4 md:order-3">
              <img
                src={ServicesB}
                alt="image 1"
                className="object-cover md:h-full"
              />
            </div>
            <div className="order-3 md:order-4">
              <ServiceCard
                reduceImage={true}
                showButton={true}
                position={() => "Direct Implementation Manager | EduSpark"}
                description={
                  "Our team developed a custom e-learning platform for EduSpark, which improved user engagement and course completion rates. Within six months, they saw a 70% rise in active users and positive feedback from students."
                }
                image={HeadShotB}
              />
            </div>
            <div className="order-5">
              <ServiceCard
                reduceImage={true}
                showButton={true}
                position={() => "Principal Accounts Strategist | FitTrack"}
                description={
                  "We launched a targeted digital advertising campaign for FitTrack, leading to a 35% increase in app downloads and a surge in new user registrations. The campaign effectively expanded their reach and market presence."
                }
                image={HeadShotC}
              />
            </div>
            <div className="order-6">
              <img
                src={ServicesC}
                alt="image 1"
                className="object-cover md:h-full"
              />
            </div>
            <div className="md:order-7">
              <img
                src={ServicesD}
                alt="image 1"
                className="object-cover md:h-full"
              />
            </div>
            <div className="md:order-8">
              <ServiceCard
                reduceImage={true}
                showButton={true}
                position={() =>
                  "Customer Directives Representative | TravelVista"
                }
                description={
                  "For TravelVista, we designed a visually appealing and user-friendly travel booking website. The new site boosted bookings by 25% and improved the overall customer journey, making travel planning easier and more enjoyable."
                }
                image={HeadShotD}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
