import {
  Wrapper,
  ScrollButton,
  Title,
  SliderControlsContainer,
  SliderCaret,
  SliderCircle,
  Container,
  InnerContainer,
  Slide,
  Image,
  ProjectDetails,
  ProjectButtonsContainer,
  ProjectButton,
  ProjectTitle,
  ProjectDescription,
} from "./index.style";
import { memo, useContext, useState } from "react";
import ScrollContext from "../../context/scrollContext";
// import CodeIcon from "../../svg/CodeIcon.svg";
// import VisitIcon from "../../svg/VisitIcon.svg";
import Caret from "../../svg/Caret.svg";

const Projects = () => {
  const { page, setPage } = useContext(ScrollContext);
  const [slide, setSlide] = useState(0);
  return (
    <Wrapper page={page}>
      <Title>
        Projects <span>&</span> Experiments
      </Title>
      <Container>
        <InnerContainer slide={slide}>
          <Slide>
            <Image src="https://picsum.photos/900/800" />
            <ProjectDetails>
              <ProjectTitle>Project Name</ProjectTitle>
              <ProjectDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </ProjectDescription>
              <ProjectButtonsContainer>
                <ProjectButton>Github</ProjectButton>
                <ProjectButton>Visit</ProjectButton>
              </ProjectButtonsContainer>
            </ProjectDetails>
          </Slide>
          <Slide>
            <Image src="https://picsum.photos/900/800" />
            <ProjectDetails>
              <ProjectTitle>Project Name</ProjectTitle>
              <ProjectDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </ProjectDescription>
              <ProjectButtonsContainer>
                <ProjectButton>Github</ProjectButton>
                <ProjectButton>Visit</ProjectButton>
              </ProjectButtonsContainer>
            </ProjectDetails>
          </Slide>
          <Slide>
            <Image src="https://picsum.photos/900/800" />
            <ProjectDetails>
              <ProjectTitle>Project Name</ProjectTitle>
              <ProjectDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </ProjectDescription>
              <ProjectButtonsContainer>
                <ProjectButton>Github</ProjectButton>
                <ProjectButton>Visit</ProjectButton>
              </ProjectButtonsContainer>
            </ProjectDetails>
          </Slide>
        </InnerContainer>
        <SliderControlsContainer>
          <SliderCaret onClick={() => setSlide((prev) => prev > 0 && prev - 1)}>
            <Caret />
          </SliderCaret>
          <SliderCircle />
          <SliderCircle />
          <SliderCircle />
          <SliderCircle />
          <SliderCaret
            flip
            onClick={() => setSlide((prev) => prev < 2 && prev + 1)}
          >
            <Caret />
          </SliderCaret>
        </SliderControlsContainer>
      </Container>
      <ScrollButton onClick={() => setPage(3)}>Scroll</ScrollButton>
    </Wrapper>
  );
};

export default memo(Projects);
