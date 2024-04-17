import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "../pages/home";
import { BrowserRouter } from "react-router-dom";
import { server } from "../mocks/server";
import { HttpResponse, http } from "msw";

describe("should render home features and perform user events ", () => {
  const user = userEvent.setup();

  test("should render heading and description", () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent("Absences");
    expect(screen.getByTestId("description")).toHaveTextContent(
      "List of all absence record"
    );
  });

  test("renders the loading component before the lists", async () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(screen.getByTestId("skeletons")).toBeInTheDocument();
  });

  test("should render list of absence", async () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(screen.getByTestId("skeletons")).toBeInTheDocument();
    expect(await screen.findAllByTestId("list-item-card")).toHaveLength(3);
  });

  test("should render error message", async () => {
    server.use(
      http.get(
        "https://front-end-kata.brighthr.workers.dev/api/absences",
        () => {
          return HttpResponse.error();
        }
      )
    );

    render(<Home />, { wrapper: BrowserRouter });

    expect(
      await screen.findByText("Something went wrong, Please reload the page.")
    ).toBeInTheDocument();
  });

  test("should render No Record error message", async () => {
    server.use(
      http.get(
        "https://front-end-kata.brighthr.workers.dev/api/absences",
        () => {
          return HttpResponse.json({ status: 500 });
        }
      )
    );

    render(<Home />, { wrapper: BrowserRouter });

    expect(await screen.findByText("No record found")).toBeInTheDocument();
  });

  test("should search by employee name", async () => {
    render(<Home />, { wrapper: BrowserRouter });

    const input = screen.getByTestId("search");

    expect(screen.getByTestId("skeletons")).toBeInTheDocument();
    expect(await screen.findAllByTestId("list-item-card")).toHaveLength(3);

    await user.type(input, "Rahaf");
    expect(input).toHaveValue("Rahaf");
    expect(screen.queryAllByTestId("list-item-card")).toHaveLength(1);
    expect(screen.queryAllByTestId("list-item-card")[0]).toHaveTextContent(
      "Rahaf"
    );
  });

  test("should sort by name", async () => {
    render(<Home />, { wrapper: BrowserRouter });

    const sortBySelector = screen.getByRole("combobox");

    await user.selectOptions(sortBySelector, "Name");
    expect(screen.queryAllByTestId("list-item-card")[0]).toHaveTextContent(
      "Amiah Fenton"
    );
  });

  test("should sort by date", async () => {
    render(<Home />, { wrapper: BrowserRouter });

    const sortBySelector = screen.getByRole("combobox");

    await user.selectOptions(sortBySelector, "Date");
    expect(screen.queryAllByTestId("list-item-card")[0]).toHaveTextContent(
      "Rahaf"
    );
  });

  test("should sort by date", async () => {
    render(<Home />, { wrapper: BrowserRouter });

    const sortBySelector = screen.getByRole("combobox");

    await user.selectOptions(sortBySelector, "Absence Type");
    expect(screen.queryAllByTestId("list-item-card")[0]).toHaveTextContent(
      "Enya"
    );
  });
});
