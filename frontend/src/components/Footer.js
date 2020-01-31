import React, { Component } from "react";
import "../styles/Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div id="navdiv" class="bg-primary text-white">
        <h5 class="navcontent">Address: 21 Mulgarrah, 3088 Greensborough</h5>
        <h5 class="navcontent">Phone: 0414675358</h5>
        <h6 class="navcontent">Created by: MERN GIRLS</h6>
      </div>
    );
  }
}

export default Footer;
