import React, { FunctionComponent } from "react";
import { QuestionProp } from "../types/types";

type dateProps = {
  question: QuestionProp;
};

const DateComponent: FunctionComponent<dateProps> = (dateProps) => {
  const { question } = dateProps;
  return (
    <div className="flex flex-col px-2 py-3 border-b-[1px] border-[#e1e1e1]">
      <input type="date" />
    </div>
  );
};

export default DateComponent;
