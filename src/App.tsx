import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import type { ITechnology } from "./types/technologyTypes";

const technologyFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data/technologies.json");
  const data = await res.json();
  return data;
};
function App() {
  const technologiesPromise = technologyFetch();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h2>Fetching technologies from data</h2>}>
        <Technology technologiesPromise={technologiesPromise}></Technology>
      </Suspense>
    </>
  );
}

export default App;
