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

  const projects = [
    {
      id: 0,
      img: "/img/sassly.png",
      title: "Landing Page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    },
    {
      id: 1,
      img: "/img/ecommerce.png",
      title: "Ecommerce Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    },
    {
      id: 2,
      img: "/img/covid.png",
      title: "Covid Awareness social Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    },
    {
      id: 3,
      img: "/img/gotcha.png",
      title: "Gotch'a - social game",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    },
  ];
  return (
    <Wrapper page={page}>
      <Title>
        Projects <span>&</span> Experiments
      </Title>
      <Container>
        <InnerContainer slide={slide}>
          {projects.map((item) => (
            <Slide key={item.id}>
              <Image src={item.img} />
              <ProjectDetails>
                <ProjectTitle>{item.title}</ProjectTitle>
                <ProjectDescription>{item.description}</ProjectDescription>
                <ProjectButtonsContainer>
                  <ProjectButton>Github</ProjectButton>
                  <ProjectButton>Visit</ProjectButton>
                </ProjectButtonsContainer>
              </ProjectDetails>
            </Slide>
          ))}
        </InnerContainer>
        <SliderControlsContainer>
          <SliderCaret onClick={() => setSlide((prev) => prev > 0 && prev - 1)}>
            <Caret />
          </SliderCaret>
          {projects.map((item, i) => (
            <SliderCircle
              key={item.id}
              active={slide === i}
              onClick={() => setSlide(item.id)}
            />
          ))}
          <SliderCaret
            flip
            onClick={() =>
              setSlide((prev) => (prev < projects.length - 1 ? prev + 1 : 0))
            }
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
