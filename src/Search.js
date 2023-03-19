import React, { Component } from "react";

export default class search extends Component {
  render() {
    const myStyle = {
      marginTop: "50px",
      marginBottom: "50px",
      width: "500px",
      height: "50px",
      borderRadius: "5px",
    };

    return (
      <div>
        <input
          placeholder="Kategori İsmi Giriniz"
          style={myStyle}
        />
      </div>
    );
  }
}
