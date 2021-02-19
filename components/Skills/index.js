import { Wrapper, ScrollButton } from "./index.style";
import { memo, useContext } from "react";
import ScrollContext from "../../context/scrollContext";

const Skills = () => {
  const { page, setPage } = useContext(ScrollContext);
  return (
    <Wrapper page={page}>
      <h1>This is Sparta</h1>
      <ScrollButton onClick={() => setPage(3)}>Scroll</ScrollButton>
    </Wrapper>
  );
};

export default memo(Skills);
