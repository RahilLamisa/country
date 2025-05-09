import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

const fetchAllCountries = fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>countries loading....</h3>}>
        <Countries fetchAllCountries={fetchAllCountries}></Countries>
      </Suspense>
    </>
  );
}

export default App;