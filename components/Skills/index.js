import { Wrapper, ScrollButton, Title } from "./index.style";
import { memo, useContext } from "react";
import ScrollContext from "../../context/scrollContext";
import SkillsCaro from "../SkillsCaro";

const Skills = () => {
  const { page, setPage } = useContext(ScrollContext);
  return (
    <Wrapper page={page}>
      <Title>
        What I Do
        <span>{" <Tech Stack />"}</span>
      </Title>
      <SkillsCaro />
      <ScrollButton onClick={() => setPage(3)}>Scroll</ScrollButton>
    </Wrapper>
  );
};

export default memo(Skills);
