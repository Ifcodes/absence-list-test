import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://front-end-kata.brighthr.workers.dev/api/absences", () => {
    return HttpResponse.json(
      [
        {
          id: 0,
          startDate: "2022-05-28T04:39:06.470Z",
          days: 9,
          absenceType: "SICKNESS",
          employee: {
            firstName: "Rahaf",
            lastName: "Deckard",
            id: "2ea05a52-4e31-450d-bbc4-5a6c73167d17",
          },
          approved: true,
        },
        {
          id: 1,
          startDate: "2022-02-08T08:02:47.543Z",
          days: 5,
          absenceType: "ANNUAL_LEAVE",
          employee: {
            firstName: "Enya",
            lastName: "Behm",
            id: "84502153-69e6-4561-b2de-8f21f97530d3",
          },
          approved: true,
        },
        {
          id: 2,
          startDate: "2020-12-31T03:08:19.146Z",
          days: 18,
          absenceType: "ANNUAL_LEAVE",
          employee: {
            firstName: "Amiah",
            lastName: "Fenton",
            id: "6ebff517-f398-4d23-9ed3-a0f14bfa3858",
          },
          approved: true,
        },
      ],
      { status: 200 }
    );
  }),
];
