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
  align-items: center;
  width: fit-content;

  > h3 {
    font-size: ${({ page }) => (page === 1 ? "1.6rem" : "0rem")};
    transition: 0.5s ease-in-out;
    transition-delay: 0.5s;
  }
  > p {
    font-size: 1rem;
    transition: 0.5s ease-in-out;
    transition-delay: 0.5s;
    transform: ${({ page }) =>
      page === 1 ? "translateX(0)" : "translateX(-120%)"};
    transition: 0.6s ease-in-out;
    transition-delay: 0.5s;
  }

  @media (min-width: 700px) {
    padding: 3rem;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 15rem;
    > h3 {
      font-size: ${({ page }) => (page === 1 ? "2rem" : "0rem")};
    }
    > p {
      font-size: 1.2rem;
    }
  }
`;

export const Title = styled.h3`
  color: #555555;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  /* text-align: right; */
  line-height: 150%;
  transition: 0.3s ease-in;
  color: #555555;
  max-width: 45ch;
  margin: 0.5rem 0;
  @media (min-width: 700px) {
    text-align: left;
  }
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
