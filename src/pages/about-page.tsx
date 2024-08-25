import image3 from "../assets/agreement.png";
import brainstorm1 from "../assets/brainstorming1.png";
import brainstorm2 from "../assets/brainstorming2.png";
import brainstorm3 from "../assets/brainstorming3.png";
import image1 from "../assets/image1.png";
import woman1 from "../assets/woman1.png";
import woman2 from "../assets/woman2.png";
import woman3 from "../assets/woman3.png";
import woman4 from "../assets/woman4.png";
import ArticleCard from "../components/cards/article-card";
import ProfileCard from "../components/cards/profile-card";
import ServiceCard from "../components/cards/service-card";
import {
  position,
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
          position={position}
          image={brainstorm2}
          description={randomSmallDescription}
        />
        <ServiceCard
          reduceImage={false}
          showButton={true}
          position={position}
          image={brainstorm1}
          description={randomSmallDescription}
        />

        <ServiceCard
          reduceImage={false}
          showButton={true}
          position={position}
          image={brainstorm3}
          description={randomSmallDescription}
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
          <p className="mt-5 text-2xl font-bold sm:text-4xl">Meet Our Team</p>
        </div>

        <div className="mt-20 grid justify-center gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <ProfileCard
            image={woman1}
            fullNames={randomFullName}
            email={randomEmail}
          />

          <ProfileCard
            image={woman2}
            fullNames={randomFullName}
            email={randomEmail}
          />

          <ProfileCard
            image={woman3}
            fullNames={randomFullName}
            email={randomEmail}
          />

          <ProfileCard
            image={woman4}
            fullNames={randomFullName}
            email={randomEmail}
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
              image={brainstorm2}
              description={randomSmallDescription}
            />

            <ArticleCard
              image={brainstorm1}
              description={randomSmallDescription}
            />

            <ArticleCard
              image={brainstorm3}
              description={randomSmallDescription}
            />

            <ArticleCard image={image3} description={randomSmallDescription} />
          </div>
        </div>
      </div>
    </div>
  );
}
