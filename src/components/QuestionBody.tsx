import { FunctionComponent } from "react";
import Radio from "../utils/Radio";
import { QuestionProp } from "../types/types";
import DateComponent from "../utils/Date";
import TextAreaComponent from "../utils/TextArea";
import CheckBox from "../utils/CheckBox";

type questionProp = {
  question: QuestionProp;
};

export const QuestionBody: FunctionComponent<questionProp> = (questionProp) => {
  const { question } = questionProp;

  return (
    <>
      <div className="h-[360px]">
        <div className="flex justify-center items-center h-[70px] border-b-[1px] border-[#e1e1e1]">
          {question.question}
        </div>
        <div>
          {question.questiontype === "Radio" && <Radio question={question} />}
          {question.questiontype === "Date" && (
            <DateComponent question={question} />
          )}
          {question.questiontype === "Textarea" && (
            <TextAreaComponent question={question} />
          )}
          {question.questiontype === "Checkbox" && (
            <CheckBox question={question} />
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionBody;
