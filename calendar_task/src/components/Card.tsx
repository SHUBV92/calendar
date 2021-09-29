import { CardContainer } from "./Card.styles";

interface Props {
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
  children?: React.ReactNode;
}

const Card = ({ children }: Props) => <CardContainer>{children}</CardContainer>;

export default Card;
