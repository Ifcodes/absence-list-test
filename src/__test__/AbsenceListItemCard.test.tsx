import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AbsenceListItemCard from "../components/cards/absence-list-item-card/AbsenceListItemCard";

describe("should render all card features and perform user events", () => {
  const listItemData = {
    id: 0,
    startDate: "2022-05-28T04:39:06.470Z",
    days: 9,
    absenceType: "SICKNESS",
    conflicts: true,
    employee: {
      firstName: "Rahaf",
      lastName: "Deckard",
      id: "2ea05a52-4e31-450d-bbc4-5a6c73167d17",
    },
    approved: true,
  };

  test("approval status should be in the card", () => {
    render(<AbsenceListItemCard {...listItemData} />);

    expect(screen.getByRole("approval_status")).toBeInTheDocument();
  });

  test("approval status should render 'Approved'", () => {
    render(<AbsenceListItemCard {...listItemData} />);

    expect(screen.getByRole("approval_status")).toHaveTextContent("Approved");
  });

  test("approval status should show success background", () => {
    render(<AbsenceListItemCard {...listItemData} />);

    expect(screen.getByRole("approval_status")).toHaveStyle(
      "background-color: #075E54"
    );
  });

  test("approval status should show error background when approved is false", () => {
    const listItem = {
      id: 0,
      startDate: "2022-05-28T04:39:06.470Z",
      days: 9,
      absenceType: "SICKNESS",
      conflicts: true,
      employee: {
        firstName: "Rahaf",
        lastName: "Deckard",
        id: "2ea05a52-4e31-450d-bbc4-5a6c73167d17",
      },
      approved: false,
    };
    render(<AbsenceListItemCard {...listItem} />);

    expect(screen.getByRole("approval_status")).toHaveStyle(
      "background-color: #dc2626"
    );
  });

  test("should render full name", () => {
    render(<AbsenceListItemCard {...listItemData} />);

    expect(screen.getByTestId("full_name")).toBeInTheDocument();
    expect(screen.getByTestId("full_name")).toHaveTextContent("Rahaf Deckard");
  });

  test("should render Absence Type", () => {
    render(<AbsenceListItemCard {...listItemData} />);

    expect(screen.getByTestId("absence_type")).toBeInTheDocument();
    expect(screen.getByTestId("absence_type")).toHaveTextContent("SICKNESS");
  });

  test("should render Date", () => {
    render(<AbsenceListItemCard {...listItemData} />);

    expect(screen.getByTestId("date_render")).toBeInTheDocument();
    expect(screen.getByTestId("date_render")).toHaveTextContent(
      "Sat May 28 2022 - Mon Jun 06 2022"
    );
  });

  test("should render conflict indicator", () => {
    render(<AbsenceListItemCard {...listItemData} />);

    expect(screen.getByTestId("conflict_indicator")).toBeInTheDocument();
  });
});
