import { FunctionComponent, useEffect } from "react";
// import BackArrow from "../resources/icons/BackArrow.svg";

type QuestionHeaderProps = {
  questionNumber: number;
  setCurrentQuestion: (val: number) => void;
};

export const QuestionHeader: FunctionComponent<QuestionHeaderProps> = ({
  questionNumber,
  setCurrentQuestion
}) => {
  const goback = (prevQuestionIndex: number) => {
    if (prevQuestionIndex >= 0) {
      setCurrentQuestion(prevQuestionIndex);
    }
  };
  return (
    <>
      <div className="h-[70px] bg-[#eee] border-b-[1px] border-[#e1e1e1]">
        {/* <img src={BackArrow} alt="back-arrow" /> */}
        <button onClick={() => goback(questionNumber - 1)}> go back </button>
      </div>
    </>
  );
};

export default QuestionHeader;
