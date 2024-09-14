"use client";
import { useState } from "react";

export default function Assessment() {

  const professionQuestions = [
    {
      question: "Which subject do you enjoy studying the most?",
      options: [
        { text: "Mathematics", interest: "Development" },
        { text: "Biology", interest: "Healthcare" },
        { text: "Economics", interest: "Business" },
        { text: "History", interest: "Arts" },
      ],
    },
    {
      question: "How do you prefer to solve problems?",
      options: [
        { text: "Logical and mathematical reasoning", interest: "Development" },
        { text: "Observing and experimenting", interest: "Healthcare" },
        { text: "Analyzing financial data", interest: "Business" },
        { text: "Exploring historical events", interest: "Arts" },
      ],
    },
    {
      question: "Which activity excites you the most?",
      options: [
        { text: "Building or fixing things", interest: "Development" },
        { text: "Managing or investing money", interest: "Business" },
        { text: "Designing or creating art", interest: "Arts" },
        { text: "Studying life forms", interest: "Healthcare" },
      ],
    },
    {
      question: "What kind of job environment do you see yourself in?",
      options: [
        { text: "Technology-driven", interest: "Development" },
        { text: "Structured, with financial growth", interest: "Business" },
        { text: "Creative and open", interest: "Arts" },
        { text: "Research and experimentation", interest: "Healthcare" },
      ],
    },
    {
      question: "Which of these activities would you choose for a free weekend?",
      options: [
        { text: "Coding or learning new technologies", interest: "Development" },
        { text: "Reading about human biology or health", interest: "Healthcare" },
        { text: "Managing personal finances", interest: "Business" },
        { text: "Drawing or designing", interest: "Arts" },
      ],
    },
    {
      question: "Which type of projects do you prefer working on?",
      options: [
        { text: "Building software or websites", interest: "Development" },
        { text: "Helping people directly", interest: "Healthcare" },
        { text: "Creating business plans", interest: "Business" },
        { text: "Creating visual designs", interest: "Arts" },
      ],
    },
    {
      question: "What motivates you the most?",
      options: [
        { text: "Innovative technology", interest: "Development" },
        { text: "Making a difference in people's lives", interest: "Healthcare" },
        { text: "Achieving business success", interest: "Business" },
        { text: "Expressing creativity", interest: "Arts" },
      ],
    },
    {
      question: "Which of these do you enjoy reading about the most?",
      options: [
        { text: "Tech advancements and coding", interest: "Development" },
        { text: "Medical discoveries and health tips", interest: "Healthcare" },
        { text: "Business trends and economic news", interest: "Business" },
        { text: "Art exhibitions and design trends", interest: "Arts" },
      ],
    },
  ];

  const careerInterests = {
    Development: [
      "Software Developer", "Web Developer", "UX/UI Designer", "Data Scientist",
      "App Developer", "AI Engineer", "Game Developer", "Blockchain Developer",
      "Cloud Engineer", "Cybersecurity Specialist"
    ],
    Healthcare: [
      "Doctor", "Nurse", "Pharmacist", "Physical Therapist", "Medical Laboratory Technician",
      "Healthcare Administrator", "Dentist", "Veterinarian", "Occupational Therapist",
      "Radiologic Technologist"
    ],
    Business: [
      "Financial Analyst", "Marketing Manager", "Business Consultant", "Accountant",
      "Sales Manager", "Human Resources Manager", "Entrepreneur", "Management Consultant",
      "Supply Chain Manager", "Investment Banker"
    ],
    Arts: [
      "Graphic Designer", "Fashion Designer", "Illustrator", "Animator", "Art Director",
      "Interior Designer", "Photographer", "Video Editor", "3D Modeler", "Multimedia Artist"
    ],
    Engineering: [
      "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Chemical Engineer",
      "Aerospace Engineer", "Robotics Engineer", "Environmental Engineer", "Structural Engineer",
      "Industrial Engineer", "Biomedical Engineer"
    ],
    Education: [
      "Teacher", "School Counselor", "Education Administrator", "Professor", "Curriculum Developer",
      "Instructional Designer", "Educational Consultant", "Special Education Teacher", "Career Counselor",
      "Academic Advisor"
    ],
    Marketing: [
      "Digital Marketer", "SEO Specialist", "Content Marketer", "Brand Manager", "Social Media Manager",
      "Public Relations Specialist", "Marketing Analyst", "Market Research Analyst", "Email Marketing Specialist",
      "Product Marketing Manager"
    ],
    Technology: [
      "IT Specialist", "Systems Analyst", "Network Engineer", "Database Administrator", "DevOps Engineer",
      "Site Reliability Engineer", "Technical Support Specialist", "Systems Integrator", "ERP Consultant",
      "Software Tester"
    ],
    Finance: [
      "Accountant", "Financial Planner", "Investment Advisor", "Risk Analyst", "Tax Consultant",
      "Credit Analyst", "Treasury Analyst", "Financial Auditor", "Portfolio Manager", "Compliance Officer"
    ],
    Media: [
      "Journalist", "Editor", "Public Relations Specialist", "Broadcast Producer", "Content Creator",
      "Media Planner", "Social Media Influencer", "Radio Host", "TV Producer", "Film Director"
    ],
  };

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerChange = (option, questionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = option;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === professionQuestions.length) {
      setQuizFinished(true);
    } else {
      alert("Please Answer all questions!!!");
    }
  };

  const getCareerSuggestions = () => {
    const interestCounts = {};
    selectedAnswers.forEach((answer) => {
      if (answer) {
        interestCounts[answer.interest] =
          (interestCounts[answer.interest] || 0) + 1;
      }
    });

    const maxInterest = Object.keys(interestCounts).reduce(
      (a, b) => (interestCounts[a] > interestCounts[b] ? a : b),
      ""
    );

    return careerInterests[maxInterest] || [];
  };

  return (
    <div className="min-h-screen pt-32 px-5 pb-7 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        {!quizFinished ? (
          <>
            <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
              Career Assessment
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Answer the following questions to receive career suggestions tailored to your interests and preferences.
            </p>
            <form className="space-y-6">
              {professionQuestions.map((question, index) => (
                <div key={index} className="border-b pb-4">
                  <h2 className="text-lg font-medium text-gray-700 mb-2">
                    {index + 1}. {question.question}
                  </h2>
                  {question.options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className="flex items-center mb-3 cursor-pointer hover:bg-gray-50 rounded-lg px-4 py-2"
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option.text}
                        className="form-radio text-blue-500 h-4 w-4"
                        onChange={() => handleAnswerChange(option, index)}
                        checked={selectedAnswers[index]?.text === option.text}
                      />
                      <span className="ml-3 text-gray-600">{option.text}</span>
                    </label>
                  ))}
                </div>
              ))}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-green-600 mb-4">
              Your Career Suggestions:
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
              {getCareerSuggestions().map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>
            <button
              onClick={() => {
                setSelectedAnswers([]);
                setQuizFinished(false);
              }}
              className="mt-6 py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
