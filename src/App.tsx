import "./App.scss";
import Title from "./components/Title";
import SectionOne from "./components/SectionOne";
import SectionZero from "./components/SectionZero";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import { useEffect } from "react";
import { loadObserver } from "./store/IntersectionObserver";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";

function App() {
  useEffect(() => {
    loadObserver();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Wrapper">
      <article className="App">
        <Title />
        <SectionZero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </article>
    </div>
  );
}

export default App;
