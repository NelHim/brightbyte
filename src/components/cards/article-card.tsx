import { department } from "../../data/fake-data";

interface ArticleCardProperties {
  image: string;
  description: string;
}

export default function ArticleCard({
  image,
  description,
}: ArticleCardProperties) {
  return (
    <div>
      <img
        src={image}
        alt="Brainstorming 2"
        className="h-48 w-full object-cover"
      />
      <div className="bg-white text-sm">
        <div className="p-5">
          <span className="font-bold">{department()}</span>
          <p className="mt-3">{description}</p>
          <button className=" mt-3 bg-primary px-8 py-2 font-bold text-white">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
