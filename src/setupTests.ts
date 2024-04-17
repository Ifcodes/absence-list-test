import { server } from "./mocks/server";
import "@testing-library/jest-dom";

beforeAll(() => {
  console.log("listening");
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
