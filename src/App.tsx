import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { router } from "./router";
import Home from "./pages/home";
import { ErrorDisplay } from "./pages/errorBoundary/errorBoundary";
import AbsenceDetail from "./pages/absence-detail/AbsenceDetail";

function App() {
  // console.log({ filteredList });
  return (
    <Routes>
      <Route path="/" element={<Home />} errorElement={<ErrorDisplay />} />
      <Route path="/absence-detail/:id" element={<AbsenceDetail />} />
    </Routes>
  );
}

export default App;
