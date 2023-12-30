import React from "react";
import { BillingWrapper, ContentWrapper } from "./Styles/Billing";
import Header from "../Components/Header/Header";
import AddItemContainer from "../Containers/AddItemContainer";
import TipContainer from "../Containers/TipContainer";

class Billing extends React.Component<any, any> {
  render() {
    return (
      <>
        <Header />
        <ContentWrapper>
          <BillingWrapper>
            <AddItemContainer />
          </BillingWrapper>
          <TipContainer />
        </ContentWrapper>
      </>
    );
  }
}

export default Billing;
