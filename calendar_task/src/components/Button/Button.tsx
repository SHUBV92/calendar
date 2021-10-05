import { MouseEventHandler } from 'react';
import { ButtonContainer } from './Button.styles';

interface ButtonProps {
  onClick: MouseEventHandler | any;
  children: React.ReactNode;
  color: string;
  backgroundColor: string;
  border: string;
}

const Button = ({
  onClick,
  children,
  color,
  backgroundColor,
  border,
}: ButtonProps) => (
  <ButtonContainer
    backgroundColor={backgroundColor}
    color={color}
    border={border}
    onClick={(e: any) => onClick(e)}
  >
    {children}
  </ButtonContainer>
);

export default Button;
