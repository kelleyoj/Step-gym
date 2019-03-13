import React, { Component } from "react";
import NavBar from "../NavBar/navbar";
import Footer from "../Footer/footer";
import "./cart.css";

class Cart extends Component {
  state = {
    isWhite: false,
    onPage: "cart"
  };
  render() {
    return (
      <div className="cart">
        <div className="container-fluid">
          <NavBar state={this.state} />
          <div className="cart-main">
            <div className="cart-head">
              <h3>SHOPPING CART</h3>
              <div className="cart-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" />
                      <th scope="col">ITEM</th>
                      <th scope="col">QTY.</th>
                      <th scope="col">PRICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="line-up">X</th>
                      <th>
                        <img
                          src="https://static1.squarespace.com/static/5751bcaa7c65e41470d9b10e/t/577bcf0dcd0f68144d22d49c/1467731739846/?format=300w"
                          alt=""
                        />
                      </th>
                      <th className="line-up">
                        <input disabled value="1" type="text" name="" id="" />
                      </th>
                      <th className="line-up">$15</th>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <div className="checkout">
                  <p>Subtotal $15</p>
                  <button className="btn"> CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Cart;
