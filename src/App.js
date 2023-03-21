import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navi from "./Navi";
import Category from "./Category";
import Product from "./Product";
import Search from "./Search";
import alertify from "alertifyjs";
export default class App extends Component {
  state = {
    products: [],
    currentCategory: "",
    cart: [],
    categories: [],
    categoryFilter: [],
  };

  getCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.componentDidMount(category.id);
  };

  componentDidMount(categoryId) {
    (() => {
      let url = "http://localhost:3000/products";

      if (categoryId) {
        url += "?categoryId=" + categoryId;
      }
      fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({ products: data }));
    })();

    (() => {
      fetch("http://localhost:3000/categories")
        .then((response) => response.json())
        .then((data) => this.setState({ categories: data }));
    })();
  }

  addToCart = (product) => {
    let sepet = this.state.cart;

    let addItem = sepet.find((c) => c.product.id === product.id);

    if (addItem) {
      addItem.quantity += 1;
    } else {
      sepet.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: sepet });
    alertify.set("notifier", "position", "top-right");
    alertify.success(`Sepete Eklendi!`);
  };

  getXIcon = (product) => {
    alertify.set("notifier", "position", "top-right");
    alertify.error(`Ürün Sepetten silindi!`);
    let removeCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: removeCart });
  };

  getCategoryFilter = (e) => {
    this.setState({
      categoryFilter: this.state.categories.filter((filtre) =>
        filtre.categoryName.includes(e.target.value)
      ),
    });
  };

  render() {
    let categoryTitle = { title: "Category" };
    let productTitle = { title: "Product" };
    console.log(this.state.categoryFilter);
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Navi getXIcon={this.getXIcon} cart={this.state.cart} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Search
                getCategoryFilter={this.getCategoryFilter}
                categories={this.state.categories}
                products={this.state.products}
              />
              <Category
                categoryFilter={this.state.categoryFilter}
                categories={this.state.categories}
                getCategory={this.getCategory}
                info={categoryTitle}
              />
            </Col>
            <Col>
              <Product
                addToCart={this.addToCart}
                currentCategory={this.state.currentCategory}
                products={this.state.products}
                info={productTitle}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
