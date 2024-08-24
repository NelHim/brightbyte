import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
