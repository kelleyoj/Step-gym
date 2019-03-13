import React, { Component } from "react";
import NavBar from "../NavBar/navbar";
import Footer from "../Footer/footer";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "./item.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onPage: "store",
      cartNumber: 0,
      value: ""
    };
  }

  handleTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val });
    console.log(this.state.cartNumber);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  storeItem = itemName => {
    switch (itemName) {
      case "1":
        return (
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 order-first">
              <div className="right">
                <h2>Pull Your Weight I</h2>
                <p>
                  By combining battle ropes, pulleys, and rope climbing, this
                  beginner level class will help you grow muscle, build
                  endurance, and put your metabolism to work.
                </p>
                <ul>
                  <li>Mondays, Thursdays: 12pm – 12:45pm</li>
                  <li>Saturdays: 11am – 11:45am</li>
                  <li>Studio 1</li>
                  <li>Instructor: Maryam Amirpour</li>
                  <li>Intensity Level: Medium</li>
                </ul>
                <span>from $15.00</span>
                <div className="item-form">
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="exampleSelect">Package:</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Select Package</option>
                        <option>Single class</option>
                        <option>5 Class</option>
                        <option>10 Class</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="quantity">Quantity:</Label>
                      <Input type="number" name="select" id="quantity" />
                    </FormGroup>
                    <button className="btn">ADD TO CART</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        );
      case "2":
        return (
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="img-thumbnail"
                src="https://static1.squarespace.com/static/5751bcaa7c65e41470d9b10e/t/57758b73c534a529b306a2bc/1467321207650/?format=300w"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 order-first">
              <div className="right">
                <h2>Heights Obstacle Course I</h2>
                <p>
                  This is our favorite weekend activity. More than a class, our
                  beginner obstacle course is designed to be fun! It’s like
                  being back at summer camp without the drama.
                </p>
                <ul>
                  <li>Saturdays: 10am – 11am</li>
                  <li>Sundays: 11am – 12pm</li>
                  <li>Intensity Level: High</li>
                  <li>Studio 3</li>
                  <li>Instructor: Joel Washington</li>
                </ul>
                <span>from $15.00</span>
                <div className="item-form">
                  <Form>
                    <FormGroup>
                      <Label for="exampleSelect">Package:</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Select Package</option>
                        <option>Single class</option>
                        <option>5 Class</option>
                        <option>10 Class</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="quantity">Quantity:</Label>
                      <Input type="number" name="select" id="quantity" />
                    </FormGroup>
                    <button className="btn">ADD TO CART</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        );
      case "3":
        return (
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="img-thumbnail"
                src="https://images.unsplash.com/photo-1548544155-4d3802f93013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 order-first">
              <div className="right">
                <h2>Weight Training</h2>
                <p>
                  from 12.99 Learn good form and reach your threshold. We’ll
                  teach you how to breathe and warm up properly, so you can
                  safely build the muscle groups you need.
                </p>
                <ul>
                  <li>Tuesdays, Thursdays: 9am – 10am</li>
                  <li>Sundays: 12pm – 1pm</li>
                  <li>One Basic Strength Training session suggested</li>
                  <li>Intensity Level: Medium</li>
                  <li>Studio 2</li>
                </ul>
                <span>from $15.00</span>
                <div className="item-form">
                  <Form>
                    <FormGroup>
                      <Label for="exampleSelect">Package:</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Select Package</option>
                        <option>Single class</option>
                        <option>5 Class</option>
                        <option>10 Class</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="quantity">Quantity:</Label>
                      <Input type="number" name="select" id="quantity" />
                    </FormGroup>
                    <button className="btn">ADD TO CART</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        );
      case "4":
        return (
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="img-thumbnail"
                src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 order-first">
              <div className="right">
                <h2>Marathon Training</h2>
                <p>
                  During this 5-week series of hour-long group training, Maiv
                  will work out plans and schedules that are catered to each
                  runner. You’ll learn to supplement the workshop with your own
                  individual runs during the week.
                </p>
                <ul>
                  <li>Saturdays: 9am – 10am</li>
                  <li>Sundays: 10am – 11am</li>
                  <li>Intensity Level: High</li>
                  <li>Outdoors</li>
                </ul>
                <span>from $15.00</span>
                <div className="item-form">
                  <Form>
                    <FormGroup>
                      <Label for="exampleSelect">Package:</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Select Package</option>
                        <option>Single class</option>
                        <option>5 Class</option>
                        <option>10 Class</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="quantity">Quantity:</Label>
                      <Input type="number" name="select" id="quantity" />
                    </FormGroup>
                    <button className="btn">ADD TO CART</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        );
      case "5":
        return (
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="img-thumbnail"
                src="https://images.unsplash.com/photo-1508215885820-4585e56135c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 order-first">
              <div className="right">
                <h2>Intro to Powerlifting</h2>
                <p>
                  This is a more advanced series of weightlifting where you’ll
                  determine your weight class and learn “snatch” and “clean and
                  jerk” lifts.
                </p>
                <ul>
                  <li>Monday, Wednesday, Friday: 9am – 10am</li>
                  <li>
                    Minimum of five prior Weight Training sessions and
                    recommendation required
                  </li>
                  <li>Studio 1</li>
                  <li>Proper weightlifting shoes required</li>
                  <li>Studio 2</li>
                </ul>
                <span>from $15.00</span>
                <div className="item-form">
                  <Form>
                    <FormGroup>
                      <Label for="exampleSelect">Package:</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Select Package</option>
                        <option>Single class</option>
                        <option>5 Class</option>
                        <option>10 Class</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="quantity">Quantity:</Label>
                      <Input type="number" name="select" id="quantity" />
                    </FormGroup>
                    <button className="btn">ADD TO CART</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        );
      case "6":
        return (
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="img-thumbnail"
                src="https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 order-first">
              <div className="right">
                <h2>Pull Your Weight II</h2>
                <p>
                  A more cardio-intense and longer version of Pull Your Weight I
                  that’s sure to get your heart racing and your calories
                  burning.
                </p>
                <ul>
                  <li>Tuesdays, Fridays: 8am – 9am</li>
                  <li>Sundays: 10am – 11am</li>
                  <li>Four prior Level I sessions suggested</li>
                  <li>Intensity Level: High</li>
                  <li>Studio 1</li>
                </ul>
                <span>from $15.00</span>
                <div className="item-form">
                  <Form>
                    <FormGroup>
                      <Label for="exampleSelect">Package:</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Select Package</option>
                        <option>Single class</option>
                        <option>5 Class</option>
                        <option>10 Class</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="quantity">Quantity:</Label>
                      <Input type="number" name="select" id="quantity" />
                    </FormGroup>
                    <button className="btn">ADD TO CART</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        );
      case "7":
        return (
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="img-thumbnail"
                src="https://images.unsplash.com/photo-1526676317768-d9b14f15615a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 order-first">
              <div className="right">
                <h2>The 100-Yard Dash</h2>
                <p>
                  This 4-week series will cover proper technique and form.
                  You’ll learn supplemental exercises that will help you run
                  faster and more efficiently. Maiv will also give you nutrition
                  advice that will help you stay fueled for a faster sprint.
                </p>
                <ul>
                  <li>Tuesdays, Thursdays: 7am – 8am</li>
                  <li>Intensity Level: Very High</li>
                  <li>Outdoor track</li>
                </ul>
                <span>from $15.00</span>
                <div className="item-form">
                  <Form>
                    <FormGroup>
                      <Label for="exampleSelect">Package:</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Select Package</option>
                        <option>Single class</option>
                        <option>5 Class</option>
                        <option>10 Class</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="quantity">Quantity:</Label>
                      <Input type="number" name="select" id="quantity" />
                    </FormGroup>
                    <button className="btn">ADD TO CART</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        );

      case "8":
        return (
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="img-thumbnail"
                src="https://images.unsplash.com/photo-1550345332-d73a0111ad25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 order-first">
              <div className="right">
                <h2>Gymnastic Rings</h2>
                <p>
                  While this is a more advanced series, we’ll start with
                  beginner strength-building holds before progressing to more
                  difficult ones.
                </p>
                <ul>
                  <li>Tuesdays, Thursdays: 6pm – 7pm</li>
                  <li>Saturdays: 11am – 12pm</li>
                  <li>Intensity Level: Medium</li>
                  <li>Studio 4</li>
                </ul>
                <span>from $15.00</span>
                <div className="item-form">
                  <Form>
                    <FormGroup>
                      <Label for="exampleSelect">Package:</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Select Package</option>
                        <option>Single class</option>
                        <option>5 Class</option>
                        <option>10 Class</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="quantity">Quantity:</Label>
                      <Input type="number" name="select" id="quantity" />
                    </FormGroup>
                    <button className="btn">ADD TO CART</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  render() {
    return (
      <div>
        <div className="item">
          <div className="container-fluid">
            <NavBar state={this.state} showStore={this.props.showPage} />
            <div className="item-main">
              {this.storeItem(this.props.itemName)}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Item;
