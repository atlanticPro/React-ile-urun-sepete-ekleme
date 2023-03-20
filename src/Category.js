import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {


  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.getCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
