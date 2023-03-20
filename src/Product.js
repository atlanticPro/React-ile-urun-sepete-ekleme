import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class Product extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}
          {!this.props.currentCategory ? "" : " - "}
          {this.props.currentCategory}
        </h3>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button onClick={() => this.props.addToCart(product)}>
                    Ekle
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
