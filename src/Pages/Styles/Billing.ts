import styled from "styled-components";

export const BillingWrapper = styled.section`
  display: flex;
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  flex-direction: row;
  padding: 1.5rem;
`;
export const Wrapper = styled.section`
  display: flex;
  width: 600px;
  max-width: 100%;
  margin: 1rem auto;
  flex-direction: column;
  padding: 1rem;
`;
export const ContentWrapper = styled.section`
  display: flex;
  margin-top: 3rem;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const ItemsWrapper = styled.section`
  padding-top: 3rem;
`;
