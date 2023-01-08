import React, { FunctionComponent, useContext } from "react";
import { QuestionProp } from "../types/types";
import { AppContext } from "../context/context";

type textAreaProps = {
  question: QuestionProp;
};

const TextAreaComponent: FunctionComponent<textAreaProps> = (textAreaProps) => {
  const { question } = textAreaProps;
  const { questionoption, questionid } = question;
  const appContext = useContext(AppContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    appContext?.updateAnswer({
      [questionid]: {
        question: question.question,
        answer: e.target.value
      }
    });
  };
  return (
    <div className="flex flex-col px-2 py-3 border-b-[1px] border-[#e1e1e1]">
      <input
        type="text"
        className="border-[#e2e2e2] border-[1px] p-1"
        placeholder="Start typing here"
        onChange={handleChange}
      />
    </div>
  );
};

export default TextAreaComponent;
