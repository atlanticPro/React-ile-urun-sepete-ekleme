import React, { Component } from "react";
import { Badge, NavItem, NavLink } from "reactstrap";
import { GrClose } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
export default class CartSummary extends Component {
  renderSummary() {
    return (
      <div>
        <NavItem>
          {this.props.cart.map((item) => (
            <NavLink active href="#" key={item.product.id}>
              <BsFillCartFill className="mr-3"/>
              {<GrClose className="mr-3" onClick={() => this.props.getXIcon(item.product)} />}
              {item.product.productName}
              <Badge color="success">{item.quantity}</Badge>
            </NavLink>
          ))}
        </NavItem>
      </div>
    );
  }

  renderOffSummary() {
    return (
      <NavItem>
        <NavLink>
          <h5>
            <AiOutlineShoppingCart  className="mr-3"/>
            SEPET BOŞ
          </h5>
        </NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderOffSummary()}
      </div>
    );
  }
}
