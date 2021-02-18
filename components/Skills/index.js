import { Wrapper } from "./index.style";
import { memo, useContext } from "react";
import ScrollContext from "../../context/scrollContext";

const Skills = () => {
  const { page, setPage } = useContext(ScrollContext);
  return (
    <Wrapper page={page}>
      <h1>Hellllooo</h1>
    </Wrapper>
  );
};

export default memo(Skills);
