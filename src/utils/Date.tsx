import React, { FunctionComponent, useContext } from "react";
import { QuestionProp } from "../types/types";
import { AppContext } from "../context/context";

type dateProps = {
  question: QuestionProp;
};

const DateComponent: FunctionComponent<dateProps> = (dateProps) => {
  const { question } = dateProps;
  const { questionid } = question;
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
      <input type="date" onChange={handleChange} />
    </div>
  );
};

export default DateComponent;
