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
  useEffect(() => {
    console.log("questionNumber at header", questionNumber);
  }, [questionNumber]);

  const goback = (prevQuestionIndex: number) => {
    console.log("clickes", prevQuestionIndex);
    if (prevQuestionIndex >= 0) {
      console.log("reduce");
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
