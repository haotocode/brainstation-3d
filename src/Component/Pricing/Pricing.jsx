import React, { Component } from "react";
import "./Pricing.scss";
import image from "./img3.jpg";
export default class Pricing extends Component {
  render() {
    return (
      <div className="container">
        <img src={image} />

        <div className="container__plans">
          <div className="container__plans--planOne">
            <h1>
              $20<span>/month</span>
            </h1>
            <h1>Starter</h1>

            <ul>
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>

            <button>Select This Plan</button>
          </div>

          <div className="container__plans--planTwo">
          <h1>
              $100<span>/month</span>
            </h1>
            <h1>Pro</h1>

            <ul>
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>

            <button>Select This Plan</button>

          </div>

          <div className="container__plans--planThree">
          <h1>
              $200<span>/month</span>
            </h1>
            <h1>Enterprise</h1>

            <ul>
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>

            <button>Select This Plan</button>

          </div>
        </div>
      </div>
    );
  }
}
