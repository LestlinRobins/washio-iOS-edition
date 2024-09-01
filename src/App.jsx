import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import HomePage from "./components/HomePage";
import './App.css';

const supabase = createClient("https://hobnuohsgubcnpzgcdfi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvYm51b2hzZ3ViY25wemdjZGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxODc0OTksImV4cCI6MjA0MDc2MzQ5OX0.yPnSCoECzCmc6Bs0gD7g5AxzIt6jHW-1r1CoCKShjMw");

function App() {
  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   getCountries();
  // }, []);

  // async function getCountries() {
  //   const { data } = await supabase.from("countries").select();
  //   setCountries(data);
  // }

  return (
    <div>
      {/* <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul> */}
      <HomePage />
    </div>
  );
}

export default App;