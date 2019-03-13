import React, { Component } from "react";
import NavBar from "../NavBar/navbar";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput
} from "reactstrap";
import "./join.css";
import Footer from "../Footer/footer";

class Join extends Component {
  state = {
    isWhite: false,
    onPage: "join"
  };
  render() {
    return (
      <div className="join-main">
        <div className="container-fluid">
          <NavBar state={this.state} />
          <div className="join-middle">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h1 className="join">Join</h1>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <p className="join-first-p">
                  We at Heights welcome everyone, regardless of what level
                  they’re starting at. Here, it’s all about the individual’s
                  journey, so you only have to live up to your own standards.
                  Get ready to have fun and get fit on your own terms. Join us
                  today.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="join-unlimited">
                      <p>Unlimited Memberships</p>
                      <p>
                        $12 - All-day Pass <br /> $79 - Monthly Unlimited
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="join-drop-in">
                      <p>Drop-in Classes</p>
                      <p>
                        $15 - Single Class <br /> $60 - 5 Class Package <br />
                        $95 - 10 Class Package
                      </p>
                    </div>
                  </div>

                  <div className="container join-form">
                    <Form>
                      <Row form>
                        <Col md={6}>
                          Name *
                          <FormGroup>
                            <Input
                              type="text"
                              name="email"
                              id="first-name"
                              placeholder="First Name"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="first-name" />
                            <Input
                              type="password"
                              name="password"
                              id="last-name"
                              placeholder="Last Name"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Label for="email">Email Address *</Label>
                        <Input
                          type="email"
                          name="address"
                          id="email"
                          placeholder="Email"
                        />
                      </FormGroup>

                      <FormGroup>
                        <span>Waiver</span>
                        <CustomInput
                          type="radio"
                          id="exampleCustomRadio"
                          name="customRadio"
                          label="I have signed and submitted the waiver via this site."
                        />
                        <CustomInput
                          type="radio"
                          id="exampleCustomRadio2"
                          name="customRadio"
                          label="I will sign the waiver on-site."
                        />
                      </FormGroup>
                      <Button outline className="form-btn">
                        SUBMIT
                      </Button>
                    </Form>
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

export default Join;
