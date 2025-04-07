import React, { useState, useRef } from "react";
import "./FAQItem.css";

export const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span className={`faq-icon ${isOpen ? "open" : ""}`}>›</span>
        <p>{question}</p>
      </div>
      <div
        className="faq-answer"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.4s ease-in-out, opacity 0.3s ease-in-out",
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};