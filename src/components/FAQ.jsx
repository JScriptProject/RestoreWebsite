import React from "react";
import FAQContent from "./FAQContent";

function FAQ() {
  return (
    <section id="faq-section">
      <div className="section-wrapper">
        <div className="section-heading">
          <h2 className="section-title">FAQs</h2>
          <p className="section-subtitle">
            Questions about Phixl AI? Here are the answeres!
          </p>
        </div>
        <div className="faq-section-contents">
            <FAQContent />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
