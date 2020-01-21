import React, { Component } from "react";
import housepic from "../images/housepic.jpg";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <img id="heroimage" src={housepic} alt="a house" />
        <br></br>
        <Link to="/getquote">
          <button>Get a quote</button>
        </Link>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quas
          culpa doloremque molestias vero nostrum nobis odit et incidunt eos
          sint ipsum qui delectus quasi quae eveniet necessitatibus soluta vitae
          assumenda minus amet impedit? Harum nobis deserunt beatae, ex earum
          ratione adipisci a sapiente doloribus eius recusandae inventore et
          excepturi deleniti saepe fuga culpa libero. Culpa ex ducimus, minus
          illo modi fuga corporis quis cupiditate, aliquid sit non a assumenda
          tempora. Quos autem iure ipsam quidem consequatur quisquam recusandae
          reiciendis voluptatem ex, numquam quam eveniet dignissimos asperiores
          porro praesentium facere distinctio molestiae illo sed, ab nemo
          doloribus. Adipisci ad obcaecati labore voluptatem praesentium
          pariatur magnam earum quo numquam quis saepe facilis, quidem minima
          ipsum, provident dolores amet, harum tempore cumque vero aspernatur?
          Vero libero fugiat iste ducimus deleniti tempore, ipsa eum maiores
          quasi, unde quisquam tempora error eveniet quo voluptatum quis nemo
          recusandae. Corrupti quidem maxime ipsam! Vitae consectetur minus
          temporibus, minima velit suscipit quisquam a aliquam delectus vel
          magnam sunt et aut ratione nobis molestias illo natus soluta quis?
          Iusto natus nostrum minima amet vero optio velit commodi a
          reprehenderit sapiente. Ad repudiandae facere natus labore dolore
          animi, unde ipsa corrupti eos officia, hic sint at quod tempore
          exercitationem?
        </p>
      </div>
    );
  }
}

export default HomePage;
