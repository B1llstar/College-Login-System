import React from "react";
import ReactDOM from "react-dom";
import "./home.css";
import Marquee from "react-fast-marquee";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header_Welcome_Marquee">
          <Marquee gradient={false} speed={30}>
            <p>WELCOME TO NEW EASTBURY COLLEGE 2021</p>
          </Marquee>
        </div>

        <div className="banner_Contact_Info">
          <div className="contact_Block">
            <h2 className="contact_Block_Heading">Contact:</h2>
            <p className="contact_Block_Paragraph">1-631-555-5555</p>
          </div>

          <div className="contact_Block">
            <h2 className="contact_Block_Heading">Need help?</h2>

            <p className="contact_Block_Paragraph">help@oldwestbury.edu</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
