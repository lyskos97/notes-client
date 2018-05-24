import * as React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <Menu borderless inverted size="large" color="violet">
        <Container>
          <Menu.Item as={NavLink} to="/notes">
            Notes
          </Menu.Item>
          <Menu.Item as={NavLink} to="/about">
            About
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as={NavLink} to="/signin">
              Sign in
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default Header;
