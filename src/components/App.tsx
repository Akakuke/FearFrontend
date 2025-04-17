
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./layout/Header";

import HomePage from "../pages/home/HomePage";
import NotFound from "../pages/not-found/NotFoundPage";
import TeamPage from "../pages/team/TeamPage";


function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<NotFound />} /> {/* Перенаправление на 404 для всех несуществующих маршрутов */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
