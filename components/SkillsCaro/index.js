import { useState } from "react";
import {
  Wrapper,
  Container,
  Slide,
  Button,
  InnerContainer,
  SlideParagraph,
} from "./index.style";

const SkillsCaro = () => {
  const [slide, setSlide] = useState(0);
  const [slides, setSlides] = useState([
    {
      id: 0,
      paragraphs: [
        "My main focus is front-end development ( client-side ).",
        "Creating visually pleasing user interfaces and memorable experiences.",
      ],
    },
    {
      id: 1,
      paragraphs: [
        "In addition to my front-end skills, I have experience with back-end development.",
      ],
    },
    {
      id: 2,
      paragraphs: ["lorem ipsum", "more lorem ipsum"],
    },
  ]);
  return (
    <Wrapper>
      <Container>
        <InnerContainer slide={slide}>
          {slides.map((item, i) => (
            <Slide key={item.id} slide={slide === i}>
              {item.paragraphs.map((p) => (
                <SlideParagraph key={p}>{p}</SlideParagraph>
              ))}
            </Slide>
          ))}
        </InnerContainer>
      </Container>
      <Button onClick={() => setSlide((prev) => prev + 1)}>Button</Button>
    </Wrapper>
  );
};

export default SkillsCaro;
