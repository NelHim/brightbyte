interface TestimonailCardProperties {
  image: string;
  description: string;
}

export default function TestimonialCard({
  image,
  description,
}: TestimonailCardProperties) {
  return (
    <div className="mx-auto sm:w-11/12">
      <p className="my-4 text-2xl font-bold sm:text-4xl">
        What Our Clients Say
      </p>
      <div className="my-5 grid justify-center">
        <img
          src={image}
          alt="Image 2"
          className="size-20 rounded-full object-cover"
        />
      </div>
      <p className="py-5 text-center">{description}</p>

      <div>
        <h2 className="font-bold">Carolyn Stewart</h2>
        <h3>United States</h3>
      </div>
    </div>
  );
}
