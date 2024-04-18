import { render, screen } from "@testing-library/react";
import AbsenceDetail from "../pages/absence-detail/AbsenceDetail";
import { BrowserRouter } from "react-router-dom";

test("should render heading", () => {
  render(<AbsenceDetail />, { wrapper: BrowserRouter });

  expect(screen.getByRole("heading")).toHaveTextContent("Employee Absence");
});
