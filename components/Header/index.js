import {
  Wrapper,
  Title,
  Paragraph,
  Container,
  ScrollButton,
} from "./index.style";
import { memo } from "react";
import { useContext } from "react";
import ScrollContext from "../../context/scrollContext";
const Header = () => {
  const { page, setPage } = useContext(ScrollContext);
  return (
    <Wrapper page={page}>
      {/* <Container>
        <Title>
          Hi! {"</>"}
          <br />
          My name is <span>Ahd</span>
        </Title>
        <Paragraph>I am a passionate Web Developer</Paragraph>
      </Container> */}
      <ScrollButton onClick={() => setPage(1)}>Scroll</ScrollButton>
    </Wrapper>
  );
};

export default memo(Header);
