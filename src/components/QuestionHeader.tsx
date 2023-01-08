import { FunctionComponent } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";

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
      <div className="h-[70px] bg-[#eee] border-b-[1px] border-[#e1e1e1] flex justify-start items-center pl-4">
        <AiOutlineArrowLeft
          style={{ fontSize: "20px" }}
          onClick={() => goback(questionNumber - 1)}
        />
      </div>
    </>
  );
};

export default QuestionHeader;
