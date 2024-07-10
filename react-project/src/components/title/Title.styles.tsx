import styled from "styled-components";
import { TitleProps } from "./Title";

export const TitleStyled = styled.p<{ color: TitleProps["color"] }>`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ color }) => color};
`;

export const TitleContainerStyled = styled.div`
  max-width: 842px;
`;
