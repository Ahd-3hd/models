import { useState } from "react";
import {
  Wrapper,
  Container,
  Slide,
  Button,
  InnerContainer,
  SlideParagraph,
  ButtonsContainer,
  CirclesContainer,
  Circle,
} from "./index.style";
import Caret from "../../svg/Caret.svg";

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
      <ButtonsContainer>
        <Button
          onClick={() => setSlide((prev) => (prev > 0 ? prev - 1 : prev))}
          disabled={slide === 0}
        >
          <Caret />
        </Button>
        <CirclesContainer>
          {slides.map((item, i) => (
            <Circle
              key={item.id}
              active={item.id === slide}
              onClick={() => setSlide(i)}
            />
          ))}
        </CirclesContainer>
        <Button
          onClick={() =>
            setSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev))
          }
          reverse
          disabled={slide === slides.length - 1}
        >
          <Caret />
        </Button>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default SkillsCaro;
