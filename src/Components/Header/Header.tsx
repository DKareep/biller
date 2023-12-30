import React from "react";
import { AtlassianIcon } from "@atlaskit/logo";
import {
  AtlassianNavigation,
  ProductHome,
} from "@atlaskit/atlassian-navigation";
const ExampleHome = () => (
  <ProductHome
    href="#"
    siteTitle="Biller"
    icon={AtlassianIcon}
    logo={AtlassianIcon}
  />
);
class Header extends React.Component<any, any> {
  render() {
    return (
      <AtlassianNavigation
        label="site"
        renderProductHome={ExampleHome}
        primaryItems={[]}
      />
    );
  }
}

export default Header;
