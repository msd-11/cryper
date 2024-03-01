import React, { useEffect, useState } from 'react';
import RiddleApi from '../api/RiddleApi';
import Riddle from '../api/Riddle';

interface QuizzI {
  callback: Function;
}

const Quiz: React.FC<QuizzI> = ({ callback }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(true);
  const [questions, setQuestions] = useState<Riddle>();

  useEffect(() => {
    if (questions == undefined || questions == null) {
      RiddleApi.getRiddle()
        .then((res) => {
          setQuestions(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleNextQuestion = () => {
    if (isCorrect) {
      if (selectedOption === questions?.answer) {
        callback(true);
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
        callback(false);
      }
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  if (questions == undefined || questions == null) {
    return <p>Loading</p>;
  }

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <div>
        <h2 className="text-lg font-semibold mb-4 text-black">
          {questions?.question}
        </h2>
        <div className="space-y-2">
          {questions?.choices.map((option, index) => (
            <button
              key={index}
              className={`block w-full p-4 rounded-lg ${
                selectedOption === option
                  ? 'bg-black/60 text-[#FFF879]'
                  : 'bg-gray-200 text-gray-700'
              }`}
              disabled={!isCorrect}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex flex-row text-center items-center mt-4">
          <button
            className="py-2 px-4 rounded-md text-[#FFF879] bg-black/60 hover:bg-[#181A1B] hover:text-white"
            onClick={handleNextQuestion}
            disabled={!selectedOption}
          >
            Guess
          </button>
          {!isCorrect ? (
            <h2 className="text-lg text-red-500 ml-4">Wrong answer!</h2>
          ) : (
            false
          )}
        </div>
        {!isCorrect ? (
          <button
            className="mt-4 py-2 px-4 rounded-md text-[#FFF879] bg-black/60 hover:bg-[#181A1B] hover:text-white"
            onClick={() => callback(false, true)}
          >
            Restart
          </button>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default Quiz;
