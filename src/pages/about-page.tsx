import AboutA from "../assets/about-page-images/about-a.jpg";
import AboutB from "../assets/about-page-images/about-b.jpg";
import AboutC from "../assets/about-page-images/about-c.jpg";
import AboutD from "../assets/about-page-images/about-d.jpg";
import AboutE from "../assets/about-page-images/about-e.jpg";
import AboutF from "../assets/about-page-images/about-f.jpg";
import AboutG from "../assets/about-page-images/about-g.jpg";
import brainstorm1 from "../assets/brainstorming1.png";
import brainstorm2 from "../assets/brainstorming2.png";
import brainstorm3 from "../assets/brainstorming3.png";
import StaffA from "../assets/staff-a.jpg";
import StaffB from "../assets/staff-b.jpg";
import woman1 from "../assets/woman1.png";
import woman3 from "../assets/woman3.png";
import ArticleCard from "../components/cards/article-card";
import ProfileCard from "../components/cards/profile-card";
import ServiceCard from "../components/cards/service-card";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="grid min-h-dvh place-content-center bg-primary/60 bg-cover bg-center pt-16 text-center text-white bg-blend-overlay"
        style={{ backgroundImage: `url(${brainstorm1})` }}
      >
        <p className="pt-3 text-xl font-bold leading-none sm:text-4xl lg:text-7xl">
          About Us
        </p>
      </div>

      {/* Body 1 Section */}

      <div className="section-layout grid gap-10 py-5 md:grid-cols-3 md:gap-10 md:py-10 lg:py-28 ">
        <ServiceCard
          reduceImage={false}
          showButton={true}
          position={() => "HomeTech"}
          image={brainstorm2}
          description={
            "We created a mobile-friendly site for HomeTech, boosting mobile traffic by 40% and increasing online sales."
          }
        />
        <ServiceCard
          reduceImage={false}
          showButton={true}
          position={() => "GlowSkincare"}
          image={AboutA}
          description={
            "Our digital rebranding for GlowSkincare led to a 50% rise in engagement and expanded their client base."
          }
        />

        <ServiceCard
          reduceImage={false}
          showButton={true}
          position={() => "AutoDrive"}
          image={brainstorm3}
          description={
            "We built a custom CRM for AutoDrive, cutting admin time by 30% and improving client retention."
          }
        />
      </div>

      {/* Body 2 Section */}

      <div className="bg-gray-200">
        <div className="section-layout grid gap-10 py-28 md:grid-cols-2">
          <div>
            <span className="font-bold text-primary">
              We provide digital services
            </span>
            <p className="mt-5 text-2xl font-bold sm:text-4xl">
              Services We're <br /> Offering
            </p>
            <div className="mt-10">
              <img src={AboutB} alt="Image 1" />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <img src={AboutC} alt="Brain storm 1" />
            <div className="mt-8 text-sm">
              <p>
                "At BrightByte, we create custom, user-friendly websites that
                are visually striking and optimized for performance. From
                concept to launch, we handle everything to bring your vision to
                life."
              </p>
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
          <p className="mt-5 text-2xl font-bold sm:text-4xl">Meet Our Team</p>
        </div>

        <div className="mt-20 grid justify-center gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <ProfileCard
            image={woman1}
            fullNames={() => "Emma Walker"}
            email={() => "emma.walker@brightbyte.com"}
          />

          <ProfileCard
            image={StaffA}
            fullNames={() => "Michael Carter"}
            email={() => "michael.carter@brightbytes.com"}
          />

          <ProfileCard
            image={woman3}
            fullNames={() => "Maya Patel"}
            email={() => "maya.patelbrightbyte.com"}
          />

          <ProfileCard
            image={StaffB}
            fullNames={() => "David Harrison"}
            email={() => "david.harrison@brightbytes.com"}
          />
        </div>
      </div>

      {/* Body 4 Section */}

      <div className="bg-gray-200">
        <div className="section-layout  py-28">
          <div className="text-center">
            <span className="font-bold text-primary">Over Articles</span>
            <p className="mt-5 text-2xl font-bold sm:text-4xl">
              Over Latest News
            </p>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <ArticleCard
              topic="Launch"
              image={AboutD}
              description={
                "We're excited to introduce our custom app development service, designed to help businesses create user-friendly, high-performance mobile apps that drive growth and engagement."
              }
            />

            <ArticleCard
              topic="AI"
              image={AboutE}
              description={
                "Artificial Intelligence is transforming the digital marketing landscape, data-driven campaigns that reach audiences more effectively and deliver superior results."
              }
            />

            <ArticleCard
              topic="spotlight"
              image={AboutF}
              description={
                "GreenEco’s digital transformation has significantly boosted their brand awareness and positioned them as leaders in sustainability, thanks to their new website and social media strategy."
              }
            />

            <ArticleCard
              topic="Trends"
              image={AboutG}
              description={
                "Stay ahead in 2024 with web design trends like immersive 3D visuals, sleek dark mode interfaces, and AI-powered features that enhance user experience and engagement."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
