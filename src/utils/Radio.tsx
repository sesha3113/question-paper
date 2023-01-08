import React, { FunctionComponent } from "react";
import { RadioProps, OptionProp, QuestionProp } from "../types/types";

type radioProps = {
  question: QuestionProp;
};

const Radio: FunctionComponent<radioProps> = (radioProps) => {
  const { question } = radioProps;

  const { questionoption } = question;
  return (
    <div className="flex flex-col">
      {questionoption?.map((option: OptionProp, index) => {
        return (
          <div className="px-2 py-3 border-b-[1px] border-[#e1e1e1]">
            <label>
              <input type="radio" name={option.optionvalue} />
              <span className="ml-2">{option.optionvalue}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
