import React, { Component } from "react";
import NavBar from "../NavBar/navbar";
import Footer from "../Footer/footer";
import Item from "../Item/item";
import "./store.css";

class Store extends Component {
  state = {
    isWhite: false,
    onPage: "store",
    itemName: "",
    showStore: true
  };

  showPage = () => {
    this.setState({ showStore: true });
  };

  changeItem = name => {
    this.setState({ itemName: name });
    this.setState({ showStore: false });
  };

  render() {
    return (
      <div>
        {this.state.showStore ? (
          <div className="store">
            <div className="container-fluid ">
              <NavBar state={this.state} showStore={this.showPage} />
              <div>
                <div className="join-middle">
                  <div>
                    <div className="row">
                      <div className="col-md-6 col-lg-6 col-sm-12">
                        <h1 className="join">Store</h1>
                      </div>
                      <div className="col-md-6 col-lg-6 col-sm-12">
                        <p className="join-first-p">
                          For those who prefer not to enlist in unlimited
                          memberships, you can purchase an individual class or a
                          class package. We also offer running workshops that
                          span across several weeks. Click on a class to learn
                          more about what is included.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="store-item">
                  <div className="pad row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="store-card"
                        onClick={() => this.changeItem("1")}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          className="image"
                          alt=""
                        />
                        <div className="overlay">
                          <div className="text">
                            Pull Your Weight I <br />
                            <span className="store-price">from $15</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="store-card"
                        onClick={() => this.changeItem("2")}
                      >
                        <img
                          src="https://static1.squarespace.com/static/5751bcaa7c65e41470d9b10e/t/57758b73c534a529b306a2bc/1467321207650/?format=300w"
                          className="image"
                          alt=""
                        />
                        <div className="overlay">
                          <div className="text">
                            {" "}
                            Height Obstacle Course I <br />
                            <span className="store-price">from $15</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="store-card"
                        onClick={() => this.changeItem("3")}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1548544155-4d3802f93013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          className="image"
                          alt=""
                        />
                        <div className="overlay">
                          <div className="text">
                            Weight Training <br />
                            <span className="store-price">from $12.99</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="store-card"
                        onClick={() => this.changeItem("4")}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          className="image"
                          alt=""
                        />
                        <div className="overlay">
                          <div className="text">
                            {" "}
                            Marathon Training <br />
                            <span className="store-price">from $200</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Store plans */}
                  <div className=" pad row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="store-card"
                        onClick={() => this.changeItem("5")}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1508215885820-4585e56135c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          className="image"
                          alt=""
                        />
                        <div className="overlay">
                          <div className="text">
                            Intro to Powerlifting <br />
                            <span className="store-price">from $15</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="store-card"
                        onClick={() => this.changeItem("6")}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          className="image"
                          alt=""
                        />
                        <div className="overlay">
                          <div className="text">
                            Pull Your Weight II
                            <br />
                            <span className="store-price">from $15</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="store-card"
                        onClick={() => this.changeItem("7")}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1526676317768-d9b14f15615a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          className="image"
                          alt=""
                        />
                        <div className="overlay">
                          <div className="text">
                            100-Yard Training <br />
                            <span className="store-price">from $150</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="store-card"
                        onClick={() => this.changeItem("8")}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1550345332-d73a0111ad25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          className="image"
                          alt=""
                        />
                        <div className="overlay">
                          <div className="text">
                            Gymnastic rings <br />
                            <span className="store-price">from $15</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <Item itemName={this.state.itemName} showPage={this.showPage} />
        )}
      </div>
    );
  }
}

export default Store;
