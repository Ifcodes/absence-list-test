/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from "react-router-dom";

export const ErrorDisplay = () => {
  const error: any = useRouteError();

  console.log({ error });
  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center text-center"
      id="error-page"
    >
      <h1>{error?.status || error?.statusText}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error?.error?.message}</p>
    </div>
  );
};
