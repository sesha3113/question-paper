import React, { FunctionComponent } from "react";
import { QuestionProp } from "../types/types";

type textAreaProps = {
  question: QuestionProp;
};

const TextAreaComponent: FunctionComponent<textAreaProps> = (textAreaProps) => {
  const { question } = textAreaProps;
  return (
    <div className="flex flex-col px-2 py-3 border-b-[1px] border-[#e1e1e1]">
      <input
        type="text"
        className="border-[#e2e2e2] border-[1px] p-1"
        placeholder="Start typing here"
      />
    </div>
  );
};

export default TextAreaComponent;
