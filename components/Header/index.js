import { Wrapper, Title, Paragraph, Container } from "./index.style";
import { memo } from "react";
const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          Hi! {"</>"}
          <br />
          My name is <span>Ahd</span>
        </Title>
        <Paragraph>I am a passionate Web Developer</Paragraph>
      </Container>
    </Wrapper>
  );
};

export default memo(Header);
