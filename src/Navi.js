import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Nav className="d-flex justify-content-between">
          <NavItem>
            <NavLink active href="#">
              Link - {this.props.cart.length}
            </NavLink>
          </NavItem>
          <CartSummary getXIcon={this.props.getXIcon} cart={this.props.cart} />
        </Nav>
      </div>
    );
  }
}
