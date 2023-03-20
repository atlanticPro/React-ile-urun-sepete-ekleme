import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const myStyle = {
      marginTop: "50px",
      marginBottom: "50px",
      width: "400px",
      height: "50px",
      borderRadius: "5px",
    };

    return (
      <div className="text-center">
        <input
          placeholder="Kategori İsmi Giriniz"
          style={myStyle}
        />
      </div>
    );
  }
}
