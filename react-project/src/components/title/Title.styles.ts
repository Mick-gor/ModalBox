import styled from "styled-components";
import { TitleProps } from "./Title";

export const Title = styled.p<{ color: TitleProps["color"] }>`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  // TODO: Refactor after theme changes
  color: ${({ color }) => color};
`;

export const TitleContainer = styled.div`
  max-width: 842px;
`;
