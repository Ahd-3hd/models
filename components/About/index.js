import { Wrapper, Title, Paragraph, ScrollButton } from "./index.style";
import { memo, useContext } from "react";
import ScrollContext from "../../context/scrollContext";

const About = () => {
  const { page, setPage } = useContext(ScrollContext);
  return (
    <Wrapper page={page}>
      {/* <Title>About Me</Title>
      <Paragraph>
        I am a well-qualified Full-Stack Developer equipped with a wide range of
        programming utilities, languages & frameworks.
      </Paragraph>
      <Paragraph>
        Enthusiastic, passionate & fully motivated by curiosity and the desire
        to stand out as software developer with a Can-do attitude.
      </Paragraph> */}
      <ScrollButton onClick={() => setPage(2)}>Scroll</ScrollButton>
    </Wrapper>
  );
};

export default memo(About);
