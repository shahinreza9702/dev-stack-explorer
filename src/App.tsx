import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import type { ITechnology } from "./types/technologyTypes";
import Hero from "./components/Hero";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Footer from "./components/Footer";

const technologyFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data/technologies.json");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
function App() {
  const technologiesPromise = technologyFetch();
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <section id="technologies" className="py-6 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-left">
            Explore the <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-left text-gray-600 mt-4">
            Pick one technology per category to build your ideal stack.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <Suspense
              fallback={
                <h2 className="text-pink-600 text-xl font-bold">
                  Fetching technologies from data
                </h2>
              }
            >
              <Technology
                technologiesPromise={technologiesPromise}
              ></Technology>
            </Suspense>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
