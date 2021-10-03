import { CardContainer } from "./Card.styles";

interface Props {
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
  children?: React.ReactNode;
  variant?: any;
}

const Card = ({ children, variant }: Props) => (
  <CardContainer variant={variant}>{children}</CardContainer>
);

export default Card;
