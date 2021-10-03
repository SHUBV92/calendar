import styled from "styled-components";

interface Props {
  variant: any;
}

export const CardContainer = styled.div<Props>`
  background-color: ${(props) => (props.variant ? "grey" : "white")};
  box-shadow: 5px 15px 15px grey;
`;
