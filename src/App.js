import './App.css';
import React, { useState } from 'react';

const questions = [
  { text: "Welcome! May I have your full name, please?", type: "input", placeholder: "Type your full name" },
  { text: "Which type of bank account do you currently have?", options: ["Savings", "Checking", "Business", "None"] },
  { text: "Are you interested in applying for a loan or credit card today?", options: ["Loan", "Credit Card", "Both", "No"] },
  { text: "What is your preferred method for receiving bank statements?", options: ["Email", "Postal Mail", "Online Portal"] },
  { text: "Do you need assistance with online banking or mobile app setup?", options: ["Yes, online banking", "Yes, mobile app", "No, thanks"] },
  { text: "What is your preferred branch location for in-person services?", options: ["Downtown", "Suburbs", "Airport", "No preference"] },
  { text: "Would you like information about our investment services?", options: ["Yes", "No", "Maybe later"] },
  { text: "Are you interested in setting up automatic bill payments?", options: ["Yes", "No", "Tell me more"] },
  { text: "Do you want to receive alerts for account activity?", options: ["SMS", "Email", "Both", "No alerts"] },
  { text: "Have you used our mobile deposit feature before?", options: ["Yes", "No", "Not sure what it is"] },
  { text: "Would you like to schedule a meeting with a financial advisor?", options: ["Yes", "No", "Maybe later"] },
  { text: "Are you interested in our retirement planning options?", options: ["Yes", "No", "Tell me more"] },
  { text: "Do you currently have overdraft protection on your account?", options: ["Yes", "No", "Not sure"] },
  { text: "Would you like to learn about our small business banking solutions?", options: ["Yes", "No", "Maybe later"] },
  { text: "Is there any other banking service you would like assistance with today?", options: ["Customer Support", "Fraud Reporting", "Account Closure", "No, thank you"] }
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleOptionClick = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      setAnswers([...answers, userInput.trim()]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserInput('');
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="chat-container">
      <header className="chat-header">Banking Services Chatbot</header>
      <main className="chat-window">
        {answers.map((answer, index) => (
          <div key={index} className={`message ${index % 2 === 0 ? 'bot' : 'user'}`}>
            {answer}
          </div>
        ))}
        {currentQuestion && (
          <div className="message bot">
            {currentQuestion.text}
          </div>
        )}
      </main>
      <form className="chat-form" onSubmit={handleSubmit}>
        {currentQuestion?.options ? (
          currentQuestion.options.map((option, index) => (
            <button
              key={index}
              type="button"
              className="option-btn"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))
        ) : (
          <div className="input-container">
            <input
              type="text"
              className="input-field"
              placeholder={currentQuestion?.placeholder}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn">
              <svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
export default App;
