import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting Timeout");

    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("Setting Interval");
    setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime}>
      QuestionTimer
    </progress>
  );
};

export default QuestionTimer;
