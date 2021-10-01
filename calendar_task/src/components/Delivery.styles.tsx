import styled from "styled-components";

export const DeliveryContainer = styled.div`
  h2 {
    color: #6495ed;
  }

  padding: 2rem;
  background-color: white;
  .strong {
    background-color: grey;
    color: #6495ed;
    padding: 3px;
  }

  .info {
    padding: 0.5rem;
  }

  .delivery {
    display: flex;
    justify-content: space-between;
    background-color: white;
    display: flex;
    max-width: 30%;
    border: 2px solid grey;
  }

  .change-button {
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    background-color: #6495ed;
    border: none;
  }
`;
