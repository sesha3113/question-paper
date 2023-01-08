import { useEffect, useState } from "react";
import questionData from "../data/questions";
import { QuestionCard } from "../components/QuestionCard";
import { getSession, setSession } from "../utils/helper";
import { QuestionProp } from "../types/types";

export const Question = () => {
  const [questions, setQuestions] = useState<QuestionProp[]>(questionData);
  setSession("totalQuestionsLength", questions.length);
  const [currentQuestion, setCurrentQuestion] = useState(
    getSession("questionIndex") || 0
  );
  useEffect(() => {
    setSession("questionIndex", currentQuestion);
  }, [currentQuestion]);
  return (
    <>
      <QuestionCard
        question={questions[currentQuestion]}
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
      />
    </>
  );
};

export default Question;
