import React from "react";
import { Menu } from "semantic-ui-react";

function HeadBar() {
  return (
    <Menu inverted>
      <Menu.Item position="left">
        <h2>Collector</h2>
      </Menu.Item>
      <Menu.Item position="right" as="a">
        <h4>Login</h4>
      </Menu.Item>
      <Menu.Item as="a">
        <h4>Sign Up</h4>
      </Menu.Item>
    </Menu>
  );
}

export default HeadBar;
