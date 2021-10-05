import styled from 'styled-components';

interface Props {
  backgroundColor: string;
}

export const CardContainer = styled.div.attrs((props) => ({
  className: props.className,
}))<Props>`
  & .primary {
    position: absolute;
    background-color: ${(props) => props.theme.secondaryColors.darkGrey};
    height: 0.2rem;
  }

  & .secondary {
    position: absolute;
    background-color: ${(props) => props.theme.secondaryColors.lightGrey};
    height: 0.2rem;
  }

  & .tertiary {
    position: absolute;
    background-color: green;
    height: 0.2rem;
  }

  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
  border: 2px solid grey;
  padding: 1rem;
`;
