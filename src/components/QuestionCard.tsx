import { FunctionComponent, useEffect, useState } from "react";
import QuestionHeader from "./QuestionHeader";
import QuestionBody from "./QuestionBody";
import QuestionFooter from "./QuestionFooter";
import { QuestionProp } from "../types/types";

type QuestionCardProps = {
  question: QuestionProp;
  setCurrentQuestion: (val: number) => void;
  currentQuestion: number;
};

export const QuestionCard: FunctionComponent<QuestionCardProps> = ({
  question,
  setCurrentQuestion,
  currentQuestion
}) => {
  return (
    <div className="flex flex-col bg-[#FFF] h-[500px] w-[600px] shadow-lg">
      <QuestionHeader
        questionNumber={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
      <QuestionBody question={question} />
      <QuestionFooter
        questionNumber={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
};
