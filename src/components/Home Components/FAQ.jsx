import React from 'react';
import { FAQItem } from './FAQItem';
import './FAQ.css';

export const FAQ = () => {
  const faqData = [
    {
      question: "If I want to customise the program according to my needs, can I be allowed to do the same?",
      answer: "Yes, you can customise the program according to your needs, in which you can add or eliminate some features of the program. Such as you can add preparation of standardised tests/TOEFL/IELTS at discounted rate. If a student needs only editing of SOP, Essay and LOR then he/she can take only this feature of the program and can pay for it only",
    },
    {
      question: "Is this program fully online or have some offline features also?",
      answer: "All the programs are designed keeping the business of the student/professional and respecting the importance of time management. So, all programs are designed to be online, so that student can take class according to his convenience and save his time and efforts in commutation. On the other hand if student wants to have offline assistance, it would also be provided.",
    },
    {
      question: "What is the best time to enrol in overseas program?",
      answer: "There is no best or late time to enrol in the overseas program. It totally depends on the demand of the student and level of application (UG/PG). If a student wants to study in foreign universities in UG programs then the best time to enrol for the program is just after class X. If a student needs to build his profile according to his dream university, then mid of class X would be the best time to enrol for the program and go according to the suggestions of experts. A student can also register for Goal setting and Profile building program @999 per month in class IX for best results and extra curricular activities and achievements. But generally, the majority of students start their preparations with the beginning of their class XI academics in the month of April/May onwards.",
    },
  ];

  return (
    <div className="FAQ">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li key={index} className="faq-item">
            <FAQItem question={item.question} answer={item.answer} />
          </li>
        ))}
      </ul>
    </div>
  );
};