import React, { FunctionComponent } from "react";
import { RadioProps, OptionProp, QuestionProp } from "../types/types";

type checkBoxProps = {
  question: QuestionProp;
};

const CheckBox: FunctionComponent<checkBoxProps> = (checkBoxProps) => {
  const { question } = checkBoxProps;

  const { questionoption } = question;
  return (
    <div className="flex flex-col">
      {questionoption?.map((option: OptionProp, index) => {
        return (
          <div className="px-2 py-3 border-b-[1px] border-[#e1e1e1]">
            <label>
              <input type="checkbox" name={option.optionvalue} />
              <span className="ml-2">{option.optionvalue}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBox;
