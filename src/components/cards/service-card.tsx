import classNames from "classnames";

interface ServiceCardProperties {
  reduceImage: boolean;
  showButton: boolean;
  position: () => string;
  image: string;
  description: string;
}

export default function ServiceCard({
  reduceImage,
  showButton,
  position,
  image,
  description,
}: ServiceCardProperties) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center text-pretty",
        { "bg-white px-5 py-20 shadow-lg": showButton },
      )}
    >
      <img
        src={image}
        alt="Image 1"
        className={classNames("object-cover", {
          "size-28 rounded-full": reduceImage,
        })}
      />
      <h2 className="mt-4 text-center text-sm font-bold sm:text-base">
        {position()}
      </h2>
      <p className="py-5 text-center">{description}</p>
      {showButton ? (
        <button className="bg-primary px-10 py-3 font-bold text-white hover:bg-secondary">
          Read more
        </button>
      ) : undefined}
    </div>
  );
}
