import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/home";
import { BrowserRouter } from "react-router-dom";

describe("should render home features and perform user events ", () => {
  test("should render heading and description", () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent("Absences");
    expect(screen.getByTestId("description")).toHaveTextContent(
      "List of all absence record"
    );
  });

  test("should render list of absences", async () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(await screen.findAllByTestId("list-item-card")).toHaveLength(20);
  });
});
