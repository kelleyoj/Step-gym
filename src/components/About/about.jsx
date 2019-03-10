import React, { Component } from "react";
import NavBar from "../NavBar/navbar";
import Footer from "../Footer/footer";
import Carousel from "../Carousel/carousel";
import "./about.css";

class About extends Component {
  state = {
    isWhite: false,
    onPage: "about"
  };
  render() {
    return (
      <div>
        <NavBar state={this.state} />
        <div className="join-middle">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h1 className="join">About</h1>
              </div>
              <div className="col-6">
                <p className="join-first-p">
                  Get ready to tear down obstacles of the mind and body. We at
                  Heights believe that getting yourself back to work means
                  setting your own pace. So start your journey with us today.
                </p>
                <div className="row">
                  <div className="col-6">
                    <div className="join-unlimited">
                      <p>Location</p>
                      <p>8 Gregory Street Flushing, NY 11354</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="join-drop-in">
                      <p>Hours</p>
                      <p>
                        7am - 8pm Weekdays <br /> 9am- 3pm Weekends
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="carousel-pics">
            <Carousel />
          </div>
        </div>

        <div className="join-middle">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h1 className="join">Equipment</h1>
              </div>
              <div className="col-6">
                <p className="join-first-p">
                  Get ready to tear down obstacles of the mind and body. We at
                  Heights believe that getting yourself back to work means
                  setting your own pace. So start your journey with us today.
                </p>
                <div className="row">
                  <div className="col-6">
                    <div className="join-unlimited">
                      <p>Location</p>
                      <p>8 Gregory Street Flushing, NY 11354</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="join-drop-in">
                      <p>Hours</p>
                      <p>
                        7am - 8pm Weekdays <br /> 9am- 3pm Weekends
                      </p>
                    </div>
                  </div>
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

export default About;
