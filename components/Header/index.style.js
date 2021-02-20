import styled from "styled-components";

export const Wrapper = styled.header`
  position: relative;
  height: 100vh;
  transform: translateY(${({ page }) => -page * 100}%);
  transition: transform 1s ease-in-out;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Container = styled.div`
  padding: 0 0.5rem;
  @media (min-width: 768px) {
    margin-left: 10vw;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: #353535;
  cursor: pointer;
  user-select: none;
  margin-top: 10rem;
  > span {
    color: #1f6eb7;
  }
  @media (min-width: 768px) {
    margin: 0;
    font-size: 3rem;
  }
  :active {
    animation: text-shadow 1.5s ease-in-out infinite;
  }
  @keyframes text-shadow {
    0% {
      transform: translateY(0);
      text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
    }

    20% {
      transform: translateY(-1em);
      text-shadow: 0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd, 0 -0.125em 0 #fb203b,
        0 -0.25em 0 #fefc4b;
    }

    40% {
      transform: translateY(0.5em);
      text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd,
        0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b;
    }

    60% {
      transform: translateY(-0.25em);
      text-shadow: 0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd,
        0 -0.03125em 0 #fb203b, 0 -0.0625em 0 #fefc4b;
    }

    80% {
      transform: translateY(0);
      text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
    }
  }
`;

export const Paragraph = styled.p`
  color: #353535;
  > span {
    color: #1f6eb7;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const ScrollButton = styled.button`
  /* position: absolute; */
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  bottom: 0;
  margin: 1rem 0;
  background: transparent;
  border: 2px solid #333333;
  border-radius: 0.3rem;
  color: #333333;
  font-size: 1rem;
  > svg {
    fill: #333333;
    stroke: 1px solid #333333;
    height: 2rem;
    width: 2rem;
  }
  font-weight: bold;
  letter-spacing: 2px;
  transition: 0.3s ease-in-out;
  :hover {
    background: #333333;
    color: #fff;
    transform: scale(1.04);
  }
  cursor: pointer;
`;
