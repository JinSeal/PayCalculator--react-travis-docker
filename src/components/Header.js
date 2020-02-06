import React from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Header = () => {
  return (
    <Navbar color="light" expand="md">
      <NavbarBrand href="/">Pay Caculator</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="https://github.com/JinSeal/PayCalculator--react-travis-docker">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
