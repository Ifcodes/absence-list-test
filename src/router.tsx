import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AbsenceDetail from "./pages/absence-detail/AbsenceDetail";
import { ErrorDisplay } from "./pages/errorBoundary/errorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorDisplay />,
  },
  {
    path: "/absence-detail/:id",
    element: <AbsenceDetail />,
  },
]);
