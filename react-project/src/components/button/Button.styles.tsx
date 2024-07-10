import styled from "styled-components";
import { ButtonProps } from "./Button";

export const ButtonStyled = styled.button<{ variant: ButtonProps["variant"] }>`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  color: ${({ variant }) => (variant === "white" ? "white" : "black")};
  background-color: ${({ variant }) =>
    variant === "white" ? "black" : "white"};
`;

export const ButtonContainerStyled = styled.div`
  margin-top: 24px;
  max-width: 468px;
  width: 100%;
`;

export const ButtonModalContainerStyled = styled.div`
  max-width: 500px;
  width: 100%;
`;
