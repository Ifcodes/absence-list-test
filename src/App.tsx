import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  // console.log({ filteredList });
  return <RouterProvider router={router} />;
}

export default App;
