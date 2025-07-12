import React from "react";
import { faqs } from "../data.js";
function FAQContent() {
  return (
    <div className="faq-block">
      <ul>
        { faqs ? faqs.map((faq) => (
          <li key={faq[0]}>
            <h2 className="faq-heading">{faq[0]}</h2>
            <p className="faq-para">{faq[1]}</p>
             <hr />
          </li>
         
        )) : "Data loading..."}
      </ul>
    </div>
  );
}

export default FAQContent;
