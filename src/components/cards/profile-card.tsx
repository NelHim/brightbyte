interface ProfileCardProperties {
  image: string;
  fullNames: () => string;
  email: () => string;
}

export default function ProfileCard({
  image,
  fullNames,
  email,
}: ProfileCardProperties) {
  return (
    <div className="grid justify-center">
      <img src={image} alt="Woman 1" className="h-80 w-64 object-cover" />
      <div className="mt-3 text-center">
        <h1 className="font-bold">{fullNames()}</h1>
        <h2>{email()}</h2>
      </div>
    </div>
  );
}
