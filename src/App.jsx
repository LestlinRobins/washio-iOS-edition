import HomePage from "./components/HomePage";
import GroundFloor from "./components/groundFloor";
import FirstFloor from "./components/firstFloor";
import SecondFloor from "./components/secondFloor";
import BookingOne from "./components/booking_one";
import BookingTwo from "./components/booking_two";
import BookingThree from "./components/booking_three";
import BookingOneTomorrow from "./components/booking_one_tomorrow";
import BookingTwoTomorrow from "./components/booking_two_tomorrow";
import BookingThreeTomorrow from "./components/booking_three_tomorrow";

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
          <Route
            path="/BookingOneTomorrow"
            element={<BookingOneTomorrow />}
          />
          <Route
            path="/BookingTwo"
            element={<BookingTwo />}
          />
          <Route
            path="/BookingTwoTomorrow"
            element={<BookingTwoTomorrow />}
          />
          <Route
            path="/BookingThree"
            element={<BookingThree />}
          />
          <Route
            path="/BookingThreeTomorrow"
            element={<BookingThreeTomorrow />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;