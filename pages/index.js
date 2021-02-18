import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import About from "../components/About";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Wrapper } from "../styles/Home.styles";
import { useDrag, useScroll } from "react-use-gesture";
import ScrollContext from "../context/scrollContext";

const World = dynamic(import("../World"), { ssr: false });

export default function Home() {
  const [page, setPage] = useState(0);

  return (
    <ScrollContext.Provider value={{ page: page, setPage: setPage }}>
      <Wrapper>
        <World />
        <Header />
        <About />
      </Wrapper>
    </ScrollContext.Provider>
  );
}
