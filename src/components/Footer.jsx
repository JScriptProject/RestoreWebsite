import React from "react";
import { popularServices } from "../data.js";
import { disclaimers } from "../data.js";

function Footer() {
  return (
    <section>
      <div className="section-wrapper">
        <footer>
          <div className="quicklinks">
            <h3>Quick Links</h3>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Contact</li>
            </ul>
          </div>
          <hr />
          <div className="popular-services">
            <h3>Popular Services</h3>
            <ul>
              {popularServices
                ? popularServices.map((item) => (
                    <li key={item}>
                      <p>{item}</p>
                    </li>
                  ))
                : "Data loading.."}
            </ul>
          </div>

          <span className="rights">© 2025 Phixl. All rights reserved.</span>
          <hr />
          <div className="disclaimer">
            <ul>
              {disclaimers
                ? disclaimers.map((item) => (
                    <li key={item}>
                     {item}
                    </li>
                  ))
                : "Data Loading ..."}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
