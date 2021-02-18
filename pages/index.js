import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Skills from "../components/Skills";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Wrapper } from "../styles/Home.styles";
import { useDrag, useScroll } from "react-use-gesture";

const World = dynamic(import("../World"), { ssr: false });

export default function Home() {
  const bind = useScroll(
    (state) => {
      console.log(state.offset);
    },
    {
      domTarget: typeof window !== "undefined" && window,
    }
  );
  return (
    <Wrapper {...bind()}>
      <World />
      <Header />
      <Skills />
    </Wrapper>
  );
}
