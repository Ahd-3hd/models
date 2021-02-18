import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  z-index: 9999;
  height: 100vh;
  transform: translateY(${({ page }) => -page * 100}%);
  transition: transform 1s ease-in-out;
`;
