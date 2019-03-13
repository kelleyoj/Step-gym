import React, { Component } from "react";
import NavBar from "../NavBar/navbar";
import Footer from "../Footer/footer";
import "./classes.css";

class Classes extends Component {
  state = {
    isWhite: false,
    onPage: "classes"
  };
  render() {
    return (
      <div className="about">
        <div className="container-fluid ">
          <NavBar state={this.state} />
          <div className="join-middle">
            <div>
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <h1 className="join">Classes</h1>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <p className="join-first-p">
                    We offer classes for every level, and each class is capped
                    at 15 people so everyone can get the individual attention
                    they need. All classes are first-come, first-served, so
                    please show up 10-15 minutes early. If a class gets full,
                    our trainers are happy to give personalized pointers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="class-list">
            <div className="row space">
              <div className="col-md-6 col-lg-3 col-sm-12">
                <h4>Pull Your Weight I</h4>
                <h5>Mondays, Thursdays</h5>
                <p>12pm - 12:45pm</p>
                <h5>Saturdays</h5>
                <p>11am - 11:45am</p>
                <p>
                  By combining battle ropes, pulleys, and rope climbing, this
                  beginner level class will help you grow muscle, build
                  endurance, and put your metabolism to work.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                <h4>Pull Your Weight II</h4>
                <h5>Tuesdays, Fridays</h5>
                <p>8am – 9am</p>
                <h5>Sundays</h5>
                <p>10am – 11am</p>
                <p>
                  Here we incorporate cardio intervals between rope exercises to
                  help you build leaner muscles. This class is for those who
                  have taken at least four sessions of Pull Your Weight I.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                <h4>Basic Strength Training</h4>
                <h5>Tuesdays, Thursdays</h5>
                <p>5pm – 6pm</p>
                <h5>Saturdays</h5>
                <p>9am – 10am</p>
                <p>
                  Here, we combine free weights with squats, lunges, and
                  high-interval exercises so that you can build strength
                  according to your own body type and goals.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                <h4>Strength & Cardio Circuit</h4>
                <h5>Mondays, Wednesdays, Fridays</h5>
                <p>1pm – 1:45pm</p>

                <p>
                  Welcome to your perfect lunch break workout. During this short
                  class, we do a series of intense cross-training moves with
                  bursts of aerobic exercise, weight lifting, and stretch
                  breaks.
                </p>
              </div>
            </div>

            <div className="row space">
              <div className="col-md-6 col-lg-3 col-sm-12">
                <h4>Heights Obstacle Course I</h4>
                <h5>Saturdays</h5>
                <p>10am – 11am</p>
                <h5>Sundays</h5>
                <p>11am – 12pm</p>
                <p>
                  This is our favorite weekend activity. More than a class, our
                  beginner obstacle course is designed to be fun! It’s like
                  being back at summer camp without the drama.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                <h4>Heights Obstacle Course II</h4>
                <h5>Sundays</h5>
                <p>1pm – 2pm</p>

                <p>
                  Work off that Sunday brunch or train for an obstacle course
                  race! We recommend this class for those who have completed at
                  least two level I courses within the last month.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                <h4>Weight Training</h4>
                <h5>Tuesdays, Thursdays</h5>
                <p>9am – 10am</p>
                <h5>Sundays</h5>
                <p>12pm – 1pm</p>
                <p>
                  Learn good form and what it means to reach your threshold.
                  We’ll teach you how to breathe and warm up properly, so you
                  can safely build the muscle groups you need.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                <h4>Intro to Powerlifting</h4>
                <h5>Mondays, Wednesdays, Fridays</h5>
                <p>9am – 10am</p>

                <p>
                  In this advanced series you’ll determine your weight class and
                  learn how to properly do a deadlift, squat, and bench press.
                </p>
              </div>
            </div>

            <div className="row space">
              <div className="col-md-6 col-lg-3 col-sm-12">
                <h4>Gymnastics Fundamentals</h4>
                <h5>Mondays, Wednesdays, Fridays</h5>
                <p>5pm – 6pm</p>

                <p>
                  For adult beginners and intermediates alike, this class will
                  teach you the basics of gymnastics and help you build the
                  strength you need to hold proper balance.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                <h4>Gymnastic Rings</h4>
                <h5>Tuesdays, Thursdays</h5>
                <p>6pm – 7pm</p>
                <h5>Saturdays</h5>
                <p>11am – 12pm</p>
                <p>
                  This class is for those who have received approval from the
                  Gymnastics Fundamentals instructor. We’ll start with beginner
                  strength-building holds before progressing to more advanced
                  ones.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                <h4>Vinyasa Yoga</h4>
                <h5>Tuesdays, Thursdays</h5>
                <p>1pm – 2pm</p>
                <h5>Saturdays</h5>
                <p>12pm – 1pm</p>
                <p>
                  Open to any level of practice, our Vinyasa Yoga class is all
                  about syncing our movements with our breath and linking each
                  pose to create a seamless sequence.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                <h4>CardiYoga</h4>
                <h5>Mondays, Wednesdays, Fridays</h5>
                <p>6pm – 6:45pm</p>
                <h5>Sundays</h5>
                <p>1pm – 1:45pm</p>
                <p>
                  Get your heart bumping and your asanas flowing. With a
                  combination of high-intensity cardio and hatha flow poses,
                  this class is perfect for those who move at a faster pace.
                </p>
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
