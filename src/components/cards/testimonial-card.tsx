interface TestimonailCardProperties {
  image: string;
  description: string;
  name: string;
  country: string;
}

export default function TestimonialCard({
  image,
  description,
  name,
  country,
}: TestimonailCardProperties) {
  return (
    <div className="mx-auto sm:w-11/12">
      <div className="my-5 grid justify-center">
        <img
          src={image}
          alt="Image 2"
          className="size-28 rounded-full object-cover"
        />
      </div>
      <p className="py-5 text-center">{description}</p>

      <div>
        <h2 className="font-bold">{name}</h2>
        <h3>{country}</h3>
      </div>
    </div>
  );
}
