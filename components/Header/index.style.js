import styled from "styled-components";

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  z-index: 999;
  padding-bottom: 25vh;
  @media (min-width: 900px) {
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 0;
    font-size: 2rem;
    margin-left: 5rem;
    max-width: fit-content;
  }
`;

export const Container = styled.div`
  padding: 0 0.5rem;
`;

export const Title = styled.h1`
  color: #353535;
  cursor: pointer;
  user-select: none;
  > span {
    color: #1f6eb7;
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

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;

export const Paragraph = styled.p`
  color: #353535;
`;
