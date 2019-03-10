import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Open Daily</h1>
            <p>
              7am - 8pm Weekdays <br /> 9am- 3pm Weekends
            </p>
          </div>
          <div className="col-6">
            <Link to="/">
              <button className="btn">JOIN TODAY</button>
            </Link>
          </div>
        </div>
        <div className="text-center copyright">Copyright&#169; 2019</div>
      </div>
    </div>
  );
};

export default Footer;
