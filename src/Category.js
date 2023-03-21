import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { MdCategory } from "react-icons/md";
import { SiTemporal } from "react-icons/si";
import "./Category.css";
export default class Category extends Component {
  getCategoryFilterRender() {
    return (
      <div style={{ width: "400px", textAlign: "center" }} className="mt-5">
        <ListGroup>
          {this.props.categoryFilter.map((filtre) => (
            <div className="child">
              <ListGroupItem
                className="listgrup"
                onClick={() => this.props.getCategory(filtre)}
                key={filtre.id}
              >
                <SiTemporal /> {filtre.categoryName}
              </ListGroupItem>
            </div>
          ))}
        </ListGroup>
      </div>
    );
  }
  fullRender() {
    return (
      <div style={{ width: "400px", textAlign: "center" }} className="mt-5">
        <ListGroup>
          {this.props.categories.map((category) => (
            <div className="child">
              <ListGroupItem
                className="listgrup"
                onClick={() => this.props.getCategory(category)}
                key={category.id}
              >
                <SiTemporal /> {category.categoryName}
              </ListGroupItem>
            </div>
          ))}
        </ListGroup>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h3 className="text-center">
          <span>
            <MdCategory />
          </span>
          {this.props.info.title}
        </h3>

        <div className="text-center d-flex justify-content-center">
          {this.props.categoryFilter.length > 0
            ? this.getCategoryFilterRender()
            : this.fullRender()}
        </div>
      </div>
    );
  }
}
