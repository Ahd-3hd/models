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
`;
