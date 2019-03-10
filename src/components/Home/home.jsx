import React, { Component } from "react";
import "./home.css";
import NavBar from "../NavBar/navbar";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../Footer/footer";

class Home extends Component {
  state = {
    isWhite: true,
    onPage: "home"
  };

  render() {
    return (
      <div>
        <div className="hero">
          <NavBar state={this.state} />
          <div className="container">
            <div className="top">
              <h1>
                Step fitness & <br /> Strength Training Studio
              </h1>
              <Link to="/">
                <button className="btn">JOIN NOW</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="home-middle">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h1 className="membership">Membership</h1>
              </div>
              <div className="col-6">
                <p className="first-p">
                  Join a fitness community that is passionate, determined, and
                  supportive. Whether you’re here for a day or committed to
                  years, we’ve got exactly what you need.
                </p>
                <div className="row">
                  <div className="col-6">
                    <div className="unlimited">
                      <p>Unlimited Memberships</p>
                      <p>
                        $12 - All-day Pass <br /> $79 - Monthly Unlimited
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="drop-in">
                      <p>Drop-in Classes</p>
                      <p>
                        $15 - Single Class <br /> $60 - 5 Class Package <br />
                        $95 - 10 Class Package
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second-middle">
          <div className="container">
            <div className="group">
              <h1>Group & Private Classes</h1>
              <h5 className="learn-more">
                <Link to="/class">
                  LEARN MORE <FaArrowRight />
                </Link>
              </h5>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="quote">
            <h1>"There is nothing impossible to someone who will try."</h1>
            <p>
              - <em>The Great Muhammad Ali</em>
            </p>
          </div>
        </div>

        <div className="home-trainer">
          <div className="container">
            <div className="group">
              <h1>World-class Trainers</h1>
              <h5 className="learn-more">
                <Link to="/class">
                  MEET THE TRAINERS <FaArrowRight />
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
