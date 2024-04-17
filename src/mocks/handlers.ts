import { http, HttpResponse } from "msw";
import { list } from "./mock-data";

export const handlers = [
  http.get("https://front-end-kata.brighthr.workers.dev/api/absences", () => {
    console.log("running handler");
    return HttpResponse.json(list, { status: 200 });
  }),

  http.get(
    "https://front-end-kata.brighthr.workers.dev/api/conflict/:id",
    () => {
      return HttpResponse.json({ conflicts: true }, { status: 200 });
    }
  ),
];
