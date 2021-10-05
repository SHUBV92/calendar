import { blue } from '@material-ui/core/colors';
import styled from 'styled-components';

export const DeliveryContainer = styled.div`
  h2 {
    color: ${(props) => props.theme.primaryColors.blue};
  }
  background-color: ${(props) => props.theme.primaryColors.lightGrey};

  padding: 2rem;

  .strong {
    color: #6495ed;
    padding: 3px;
  }

  .info {
    /* padding: 0.5rem; */
    padding-left: 2rem;
    height: 4rem;
  }

  .delivery-info {
    position: absolute;
  }

  .delivery-state {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .delivery-card {
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    max-width: 60%;
    border: 2px solid grey;
    box-shadow: 5px 15px 15px grey;
    height: 8rem;
  }

  .change-button {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background-color: ${(props) => props.theme.primaryColors.lightBlue};
    border: none;
    width: 30%;
  }

  .change-button-info {
    text-decoration: underline;
    cursor: pointer;
  }

  .info-message {
    background-color: ${(props) => props.theme.primaryColors.lightBlue};
  }
`;
