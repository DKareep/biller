import styled from "styled-components";
export const FinalAmount = styled.section`
  padding: 2rem;
  @media screen and (max-width: 900px) {
    padding: unset;
  }
`;

export const TotalWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  div.total-container {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    padding: 1rem;
    width: 200px;
    .sub-total,
    .tip,
    .total {
      display: flex;
      justify-content: space-between;
    }
  }
`;
