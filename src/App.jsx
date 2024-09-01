import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import HomePage from "./components/HomePage";
import GroundFloor from "./components/groundFloor";
import FirstFloor from "./components/firstFloor";
import SecondFloor from "./components/secondFloor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';

const supabase = createClient("https://hobnuohsgubcnpzgcdfi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvYm51b2hzZ3ViY25wemdjZGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxODc0OTksImV4cCI6MjA0MDc2MzQ5OX0.yPnSCoECzCmc6Bs0gD7g5AxzIt6jHW-1r1CoCKShjMw");

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/GroundFloor"
            element={<GroundFloor />}
          />
          <Route
            path="/FirstFloor"
            element={<FirstFloor />}
          />
          <Route
            path="/SecondFloor"
            element={<SecondFloor />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;