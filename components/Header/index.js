import {
  Wrapper,
  Title,
  Paragraph,
  Container,
  ScrollButton,
  IconsContainer,
  IconLink,
} from "./index.style";
import { memo } from "react";
import { useContext } from "react";
import ScrollContext from "../../context/scrollContext";
import Social from "../Social";

const Header = () => {
  const { page, setPage } = useContext(ScrollContext);
  return (
    <Wrapper page={page}>
      <Container>
        <Title>
          Hi! {"</>"}
          <br />
          My name is <span>Ahd</span>
        </Title>
        <Paragraph>
          I am
          <span>
            {" </"} a passionate {"> "}
          </span>
          Web Developer
        </Paragraph>
        <Social />
        <ScrollButton onClick={() => setPage(1)}>Scroll</ScrollButton>
      </Container>
    </Wrapper>
  );
};

export default memo(Header);
