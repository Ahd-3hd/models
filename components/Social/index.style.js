import styled from "styled-components";

export const IconsContainer = styled.div`
  max-width: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const IconLink = styled.a`
  display: flex;
  > svg {
    fill: #555555;
    height: 2rem;
    width: 2rem;
    transition: 0.3s ease-in-out;
  }
  :hover {
    > svg {
      fill: #333333;
      transform: scale(1.1);
    }
  }
`;
