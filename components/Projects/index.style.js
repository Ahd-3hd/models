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
  @media (min-width: 1024px) {
    align-items: flex-start;
    padding: 10vh 3vw;
  }
`;

export const Title = styled.h3`
  color: #353535;
  font-size: 1.5rem;
  margin: 0;
  > span {
    color: #1f6eb7;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const ProjectButton = styled.a`
  background: #353535;
  color: #ffffff;
  border-radius: 0.2rem;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
  height: 2.5rem;
  width: 40%;
  display: flex;
  > svg {
    width: 1.3rem;
    fill: #ffffff;
  }
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    max-width: 150px;
    margin-right: 1rem;
  }
`;
export const ProjectButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: auto;
  margin-top: 2rem;
  @media (min-width: 1024px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const SliderControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;
export const SliderCaret = styled.button`
  background: transparent;
  border: none;

  > svg {
    width: 0.6rem;
    fill: #353535;
    transform: ${({ flip }) => flip && "rotateY(180deg);"};
  }
`;
export const SliderCircle = styled.button`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  border: none;
  margin: 0 0.5rem;
  background: ${({ active }) => (active ? "#1F6EB7" : "#35353599")};
  transition: background 0.3s ease-in-out;
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

export const Container = styled.div`
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  transform: translateX(${({ slide }) => -slide * 100}%);
  transition: 0.5s ease-in-out;
`;

export const Slide = styled.div`
  min-width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;

export const Image = styled.img`
  align-self: center;
  width: 70%;
  /* max-width: 800px; */
  max-height: 50vh;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.15);
  object-fit: cover;
  object-position: center;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ProjectDetails = styled.div`
  @media (min-width: 1024px) {
    width: 50%;

    margin-right: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

export const ProjectTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #1f6eb7;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
export const ProjectDescription = styled.p`
  line-height: 150%;
  color: #353535;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
