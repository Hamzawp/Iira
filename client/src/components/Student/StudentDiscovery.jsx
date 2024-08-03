// Quiz.jsx
import { useState } from "react";
import "./StudentDiscovery.css";
import { FaArrowRight } from "react-icons/fa";

function StudentDiscovery() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const questions = [
    {
      question: "What kind of project are you looking for?",
      input: true,
    },
    {
      question: "What is the main goal of your project?",
      input: true, // This indicates that it's a text input question
    },
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
      options: [
        "E-commerce",
        "Social Media",
        "Data Analysis",
        "Entertainment",
        "Miscellaneous",
      ],
    },
  ];
  // const progress = (currentQuestion / (questions.length - 1)) * 100;
  const handleNext = () => {
    if (answers[currentQuestion] !== undefined) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);

    const answeredQuestions = updatedAnswers.filter((ans) => ans !== undefined);
    const progress = (answeredQuestions.length / questions.length) * 100;
    setProgress(progress);
  };

  const renderOptions = () => {
    if (questions[currentQuestion].input) {
      return (
        <div className="text-area-container">
          <textarea
            className="centered-textarea"
            placeholder="Tell us about it in detail..."
            onChange={(e) => handleAnswer(e.target.value)}
            value={answers[currentQuestion] || ""}
          />
        </div>
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
      const projectSuggestions = [
        {
          title: "Handcrafted Haven",
          description:
            "An ecommerce platform where local artisans and craftspeople can sell their handmade goods online to a global audience.",
          score: 8.2,
          read_count: 379,
        },
        {
          title: "NutriCare ",
          description:
            "A personalized nutrition service that offers customized meal plans and wellness recommendations based on individual dietary needs, health goals, and budget.",
          score: 9.1,
          read_count: 442,
        },
        {
          title: "GreenBox ",
          description:
            "A subscription box service that delivers eco-friendly products straight to your door, creating a sustainable lifestyle for you and the environment.",
          score: 7.8,
          read_count: 291,
        },
        {
          title: "Roomful of Dreams",
          description:
            "An ecommerce service that connects you with virtual interior designers who create custom room designs and provide all the necessary furniture and decor items to make it a reality.",
          score: 8.7,
          read_count: 513,
        },
        {
          title: "Vintage Visions",
          description:
            "An online marketplace for vintage and antique items, showcasing unique, high-quality products and providing secure payment options for customers.",
          score: 9.3,
          read_count: 680,
        },
        {
          title: "The Entrepreneur Hub",
          description:
            "An online coaching and training service for entrepreneurs and business owners, offering tutorials on various business topics like marketing, finance, and leadership.",
          score: 8.5,
          read_count: 444,
        },
      ];

      return (
        <div>
          <main>
            <div className="head-title">
              <div className="left">
                <h1>Project References</h1>
              </div>
            </div>

            <ul className="box-info-projRev">
              {projectSuggestions.map((project, index) => (
                <li key={index}>
                  <div className="card-fac">
                    <div className="card__wrapper">
                      <div className="card___wrapper-acounts">
                        <div className="card__score">+{project.score}</div>
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
                      <span className="card__indicator-amount"></span> Read |{" "}
                      {""}
                      <span className="card__indicator-percentage">
                        {project.read_count}
                      </span>
                    </div>
                    {/* <div className="card__progress">
                    <progress value="75" max="100"></progress>
                  </div> */}
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </div>
      );
    }
  };

  const [progress, setProgress] = useState(0);

  return (
    <>
      {currentQuestion < questions.length ? (
        <div className="quiz-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="question">
            <h2>{questions[currentQuestion].question}</h2>
          </div>
          <div className="options">{renderOptions()}</div>
          <button
            className="next-button"
            onClick={() => {
              handleAnswer(answers[currentQuestion]);
              handleNext();
            }}
            disabled={!answers[currentQuestion]}
          >
            <div className="button-content">
              <h4>Next</h4>
              <FaArrowRight className="arrow-icon" />
            </div>
          </button>
        </div>
      ) : (
        renderResults()
      )}
    </>
  );
}

export default StudentDiscovery;
