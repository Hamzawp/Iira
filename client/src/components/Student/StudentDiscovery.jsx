// Quiz.jsx
import  { useState } from "react";
import "./StudentDiscovery.css";

function StudentDiscovery() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const questions = [
    {
      question: "What type of project are you interested in?",
      options: [
        "Web Development",
        "Mobile App Development",
        "Data Science",
        "Game Development",
      ],
    },
    {
      question: "Which technology stack do you prefer?",
      options: ["MERN Stack", "MEAN Stack", "Python + Django", "Unity + C#"],
    },
    {
      question: "What is the main goal of your project?",
      options: ["E-commerce", "Social Media", "Data Analysis", "Entertainment"],
    },
  ];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
  };

  const renderOptions = () => {
    if (questions[currentQuestion].input) {
      return (
        <input
          type="text"
          placeholder="Type your answer here"
          onChange={(e) => handleAnswer(e.target.value)}
          value={answers[currentQuestion] || ""}
        />
      );
    } else {
      return questions[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option)}
          className={
            answers[currentQuestion] === option ? "option selected" : "option"
          }
        >
          {option}
        </button>
      ));
    }
  };

  const renderResults = () => {
    if (answers.length === questions.length) {
      // Logic for generating project suggestions based on answers
      // Replace the dummy data with actual project suggestions
      const projectSuggestions = [
        {
          "title": "Web Development Project",
          "description": "Build a modern web application using your chosen tech stack."
        },
        {
          "title": "Mobile Application Project",
          "description": "Create a mobile app for iOS and Android devices."
        },
        {
          "title": "Game Development Project",
          "description": "Develop an interactive game using Unity and C#."
        },
        {
          "title": "UI/UX Design Project",
          "description": "Create stunning user interfaces and experiences for websites or mobile apps."
        },
        {
          "title": "Machine Learning Project",
          "description": "Develop machine learning models for tasks like image recognition or natural language processing."
        },
        {
          "title": "IoT (Internet of Things) Project",
          "description": "Connect physical devices to the internet and develop applications for them."
        },
        // {
        //   "title": "Cybersecurity Project",
        //   "description": "Enhance the security of an application or network through ethical hacking and security measures."
        // },
        
        // {
        //   "title": "UI/UX Design Project",
        //   "description": "Create stunning user interfaces and experiences for websites or mobile apps."
        // }
        
        
      ];

      return (
        <div className="results">
          {/* <div className="res">
            <ul>
            {answers.map((answer, index) => (
              <li key={index}>
                <strong>Question {index + 1}:</strong> {answer}
              </li>
            ))}
          </ul>
            </div>
          */}
        <div>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Project Preferences</h1>
           
          </div>
          {/* <a href="#" className="btn-add">
               <span className="text">Approve All ✔</span> 
            </a> */}
        </div>

        <ul className="box-info-projRev">
          {projectSuggestions.map((project, index) => (
            <li key={index}>
              <div className="card-fac">
                <div className="card__wrapper">
                  <div className="card___wrapper-acounts">
                    <div className="card__score">+3</div>
                    <div className="card__acounts">
                      <svg
                        viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                      ></svg>
                    </div>
                    <div className="card__acounts">
                      <svg
                        viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                      ></svg>
                    </div>
                  </div>
                  <div className="card__menu">
                    <svg
                      fill="none"
                      height="20"
                      viewBox="0 0 4 20"
                      width="4"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </div>
                </div>
                <div className="card__title">{project.title}</div>
                <div className="card__subtitle">{project.description}</div>
                <div className="card__indicator">
                  <span className="card__indicator-amount"></span> Read | {""}
                  <span className="card__indicator-percentage">75k</span>
                </div>
                <div className="card__progress">
                  <progress value="75" max="100"></progress>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
         
        </div>
      );
    }
  };

  return (
    <div className="quiz-container">
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
    {currentQuestion < questions.length ? (
      <>
        <div className="question">
          <h2>{questions[currentQuestion].question}</h2>
        </div>
        <div className="options">{renderOptions()}</div>
        <button
          className="next-button"
          onClick={handleNext}
          disabled={!answers[currentQuestion]}
        >
          <div className="question">
            <h4>Next</h4>
          </div>
        </button>
      </>
    ) : (
      renderResults()
    )}
  </div>
  );
}

export default StudentDiscovery;
