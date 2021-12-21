import React, { Component } from "react";
import Background from "./images/banner_img_718px.png";
import blackBackground from "./images/black.png";

class BannerImage extends React.Component {
  render() {
    return (
      <div
        id="bannerImageTint"
        style={{
          backgroundImage: `url(${blackBackground})`,
        }}
      >
        <div
          className="bannerImage"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="bannerOuterTextBox">
            <div id="bannerMiddleTextBox">
              <h2 className="bannerHeadText" id="firstBannerText">
                WELCOME TO NEW EASTBURY COLLEGE
              </h2>
            </div>
            <div id="bannerInnerTextBox">
              <h1 className="bannerHeadText" id="secondBannerText">
                ON A MISSION TO EDUCATE US ALL
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerImage;
