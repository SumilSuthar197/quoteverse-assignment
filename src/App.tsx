import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import HomePage from "./Pages/HomePage";
import StarPage from "./Pages/StarPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="star-quotes" element={<StarPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
