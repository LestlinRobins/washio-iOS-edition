import HomePage from "./components/HomePage";
import GroundFloor from "./components/groundFloor";
import FirstFloor from "./components/firstFloor";
import SecondFloor from "./components/secondFloor";
import BookingOne from "./components/booking_one";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';

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
          <Route
            path="/BookingOne"
            element={<BookingOne />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;