import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  z-index: 9999;
  height: 100vh;
  transform: translateY(${({ page }) => -page * 100}%);
  transition: transform 1s ease-in-out;
  padding: 1rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ScrollButton = styled.button`
  position: absolute;
  padding: 0.7rem 1rem;
  left: 0;
  bottom: 0;
  margin: 1rem;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 0.3rem;
  color: #333333;
  font-size: 1rem;
`;

export const Title = styled.h2`
  color: #333333;
  > span {
    color: #1f6eb7;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
`;
export const ArtContainer = styled.div`
  display: none;
  flex: 1;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url("/img/fox.png") no-repeat,
      url("/img/skillsbg.png") no-repeat;
    background-size: contain;
    background-position: center;
    background-blend-mode: multiply;
    filter: grayscale(50%);
    opacity: 0.3;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const Scattered = styled.div`
  position: relative;
  /* overflow: hidden; */
  height: 100%;
  width: 100%;
`;

export const ScatteredSpan = styled.span`
  position: relative;
  display: block;
  /* width: fit-content; */
  /* top: ${({ num }) => Math.abs(Math.sin(Math.cos(num)))}px;
  left: ${({ num }) => Math.abs(Math.cos(num)) * 20}px; */
  font-size: 1.2rem;
  z-index: 3;
  font-weight: bold;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  white-space: pre-wrap;
  word-wrap: break-word;
  transform: ${({ num }) =>
    `translate(${Math.abs(Math.sin(num + 1) * 60)}%,0)`};
  transition: 3s;
  color: #333333;
`;

// transform: ${({ num }) =>
// `translate(${Math.abs(Math.sin(num + 1) * 60)}%,0)`};
