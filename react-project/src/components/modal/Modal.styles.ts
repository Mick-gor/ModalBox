import styled from "styled-components";

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 1rem;
  width: 900px;
  height: 500px;
  row-gap: 71px;
  z-index: 20;
`;

export const ModalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 40%;
`;

export const TitleContainer = styled.div`
  max-width: 842px;
`;

export const ButtonModalContainer = styled.div`
  max-width: 500px;
  width: 100%;
`;
