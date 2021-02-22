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
  transition: 1s ease-in-out;
`;
export const Button = styled.button``;

export const SlideParagraph = styled.p`
  color: #333333;
  line-height: 150%;
`;
