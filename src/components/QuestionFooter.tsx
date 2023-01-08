import { FunctionComponent, useState } from "react";
import { getSession, setSession } from "../utils/helper";

type QuestionFooterProps = {
  questionNumber: number;
  setCurrentQuestion: (val: number) => void;
};

export const QuestionFooter: FunctionComponent<QuestionFooterProps> = ({
  questionNumber,
  setCurrentQuestion
}) => {
  const [totalQuestionsLength, setTotalQuestionLength] = useState(
    getSession("totalQuestionsLength")
  );
  const next = (nextQuestionIndex: number) => {
    if (nextQuestionIndex < totalQuestionsLength) {
      setCurrentQuestion(nextQuestionIndex);
    }
  };
  return (
    <>
      <div className="h-[70px] bg-[#eee] border-t-[1px] border-[#e1e1e1] flex items-center justify-end pr-5">
        <button
          className="px-8 rounded-md py-2 bg-red-500 text-white"
          onClick={() => next(questionNumber + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default QuestionFooter;
