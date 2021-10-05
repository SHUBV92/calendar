import { CardContainer } from './Card.styles';

interface Props {
  className?: string;
  children?: React.ReactNode;
  backgroundColor: string;
}

const Card = ({ children, backgroundColor, className }: Props) => (
  <>
    <CardContainer backgroundColor={backgroundColor} className={className}>
      {children}
    </CardContainer>
  </>
);

export default Card;
