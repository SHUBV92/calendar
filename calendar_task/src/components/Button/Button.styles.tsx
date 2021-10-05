import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  border: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
  color: ${(props) => (props.color ? props.color : '#ffff')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#ffff'};
  border: ${(props) => (props.border ? props.border : 'none')};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.2rem;
`;
