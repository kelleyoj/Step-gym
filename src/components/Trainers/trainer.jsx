import React, { Component } from "react";
import NavBar from "../NavBar/navbar";
import Footer from "../Footer/footer";
import "./trainer.css";

class Classes extends Component {
  state = {
    isWhite: false,
    onPage: "trainer"
  };
  render() {
    return (
      <div className="trainer">
        <div className="container-fluid ">
          <NavBar state={this.state} />
          <div className="join-middle">
            <div>
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <h1 className="join">Trainers</h1>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <p className="join-first-p">
                    All of our trainers are ABCD certified, which means they’ve
                    been trained in anatomy, physiology, and nutrition. They
                    understand that no two bodies are alike and will work with
                    you to get fit at the right pace.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" margin row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="trainer-card">
                <div className="trainer-header">
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1549476464-8193b09594a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="trainer-body">
                  <h5>Doug Cicely</h5>
                  <h5>Specializations</h5>
                  <p>Weightlifting Strength Training Senior Fitness</p>
                  <p>
                    Doug grandfather introduced weightlifting to him at an early
                    age, so it’s no surprise that he went on to compete
                    nationally. He approaches his own training with patience and
                    resolve and brings that same attitude to his clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="trainer-card">
                <div className="trainer-header">
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="trainer-body">
                  <h5>Vinny Marinda</h5>
                  <h5>Specializations</h5>
                  <p>
                    Functional Training Fitness & Nutrition Yoga Marathon
                    Training
                  </p>
                  <p>
                    Vinny is addicted to fruits, vegetables, and marathons.
                    During individual sessions, she also trains alongside you,
                    so you never feel like you’re working out alone.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="trainer-card">
                <div className="trainer-header">
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1531260490936-5be73c4f8fc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="trainer-body">
                  <h5>Aniya Sylvia</h5>
                  <h5>Specializations</h5>
                  <p>
                    Gymnastics Sports Conditioning Strength & Resistance
                    Training Orthopedic Exercise
                  </p>
                  <p>
                    With a background in gymnastics, Aniya has a passion for
                    applying his experience to helping you develop lean muscle
                    and healthy joints.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="trainer-card">
                <div className="trainer-header">
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1546817372-628669db4655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="trainer-body">
                  <h5>Bess Jade</h5>
                  <h5>Specializations</h5>
                  <p>Sports Conditioning Weight Management Strength Training</p>
                  <p>
                    Bess is a former competitive swimmer who has found that
                    ropes resistance training mimics moving against water. She
                    brings a determined, but encouraging energy to all her
                    clients and classes.
                  </p>
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

export default Classes;
