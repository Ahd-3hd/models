import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 25vh;
`;
export const Container = styled.div`
  overflow: hidden;
`;

export const InnerContainer = styled.div`
  position: relative;
  transition: 1s ease-in-out;
  width: 100%;
  display: flex;
  transform: translateX(${({ slide }) => slide * -100}%);
`;

export const Slide = styled.div`
  min-width: 100%;
  width: 100%;
  transform: scale(${({ slide }) => (slide ? "1" : "0.5")});
  opacity: ${({ slide }) => (slide ? "1" : "0")};
  transition: 1s ease-in-out;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  background: transparent;
  border: none;
  margin-right: 1rem;
  outline: none;
  cursor: pointer;
  > svg {
    height: 1.5rem;
    width: 1.5rem;
    transform: ${({ reverse }) => reverse && "rotateY(180deg);"};
    fill: ${({ disabled }) => (disabled ? "#38383855" : "#38383899")};
    transition: fill 0.4s ease-in-out;
  }
  :hover {
    > svg {
      fill: ${({ disabled }) => (disabled ? "#38383855" : "#383838")};
    }
  }
`;

export const SlideParagraph = styled.p`
  color: #333333;
  line-height: 150%;
`;

export const CirclesContainer = styled.div`
  margin-right: 1rem;
`;
export const Circle = styled.button`
  border: none;
  margin: 0.1rem;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 1.1rem;
  background: ${({ active }) => (active ? "#0E9EBD" : "#333333")};
  transition: background 0.3s ease-in-out;
  cursor: pointer;
  outline: none;
`;
