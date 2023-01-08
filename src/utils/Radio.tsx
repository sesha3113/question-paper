import { FunctionComponent } from "react";
import { OptionProp, QuestionProp } from "../types/types";
import { useContext } from "react";
import { AppContext } from "../context/context";
import { useState } from "react";

type radioProps = {
  question: QuestionProp;
};

const Radio: FunctionComponent<radioProps> = (radioProps) => {
  const { question } = radioProps;

  const { questionoption, questionid } = question;
  const appContext = useContext(AppContext);
  const [answer, setAnswer] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    appContext?.updateAnswer({
      id: questionid,
      question: question.question,
      answer: e.target.value
    });
    setAnswer(e.target.value);
  };
  return (
    <div className="flex flex-col" onChange={handleChange}>
      {questionoption?.map((option: OptionProp, index) => {
        return (
          <div className="px-2 py-3 border-b-[1px] border-[#e1e1e1]">
            <label>
              <input
                type="radio"
                name={String(option.optionid)}
                value={option.optionvalue}
                checked={answer === option.optionvalue}
              />
              <span className="ml-2">{option.optionvalue}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
