import {
  Wrapper,
  ScrollButton,
  Title,
  Container,
  ArtContainer,
  Scattered,
  ScatteredSpan,
} from "./index.style";
import { memo, useContext } from "react";
import ScrollContext from "../../context/scrollContext";
import SkillsCaro from "../SkillsCaro";

const Skills = () => {
  const spans = [
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "GatsbyJS",
    "NodeJS",
    "HTML",
    "CSS",
    "React-Native",
    "Git",
    "Github",
    "Sass",
    "Styled-Components",
    "ExpressJS",
    "Firebase",
    "Strapi",
    "CMS / headless CMS",
    "JWT Authentication",
    "MongoDB",
  ];
  const { page, setPage } = useContext(ScrollContext);

  return (
    <Wrapper page={page}>
      <Title>
        What I Do
        <span>{" <Tech Stack />"}</span>
      </Title>
      <Container>
        <SkillsCaro />
        <ArtContainer>
          <Scattered>
            {spans.map((item, i) => (
              <ScatteredSpan key={item} num={i * 5}>
                {item}
              </ScatteredSpan>
            ))}
          </Scattered>
        </ArtContainer>
      </Container>
      <ScrollButton onClick={() => setPage(3)}>Scroll</ScrollButton>
    </Wrapper>
  );
};

export default memo(Skills);
