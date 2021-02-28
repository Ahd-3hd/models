import dynamic from "next/dynamic";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useState } from "react";
import { Wrapper } from "../styles/Home.styles";
import ScrollContext from "../context/scrollContext";
import { useGesture, useWheel } from "react-use-gesture";
import { Lethargy } from "lethargy";

const World = dynamic(import("../World"), { ssr: false });
const lethargy = new Lethargy();

export default function Home() {
  const [page, setPage] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const bind = useWheel(({ event, last, first, memo: wait = false }) => {
    if (first && scrollEnabled) {
      const s = lethargy.check(event);
      if (s < 0 && page < 3) {
        setPage((prev) => prev + 1);
        setScrollEnabled(false);
        setTimeout(() => setScrollEnabled(true), 1900);
      } else if (s > 0 && page > 0) {
        setPage((prev) => prev - 1);
        setScrollEnabled(false);
        setTimeout(() => setScrollEnabled(true), 1900);
      }
    } else {
      return false;
    }
  });

  return (
    <ScrollContext.Provider value={{ page: page, setPage: setPage }}>
      <Wrapper {...bind()}>
        <World />
        <Header />
        <About />
        <Skills />
        <Projects />
      </Wrapper>
    </ScrollContext.Provider>
  );
}
