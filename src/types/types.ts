// export interface QuestionProp {
//   question: {
//     attributetype: number;
//     question: string;
//     questionid: number;
//     questionoption?: OptionProp[];
//     questiontype: string;
//     validation: boolean;
//   };
// }
export interface QuestionProp {
  attributetype: number;
  question: string;
  questionid: number;
  questionoption?: OptionProp[];
  questiontype: string;
  validation: boolean;
}

export interface RadioProps {
  question: {
    attributetype: number;
    question: string;
    questionid: number;
    questionoption?: OptionProp[];
    questiontype: string;
    validation: boolean;
  };
}

export interface OptionProp {
  optionid: number;
  optionvalue: string;
  price: number;
  optionaction: string;
  selected: boolean;
  subquestion: any[] | null;
}

export interface answerProp {
  id: number;
  question: string;
  answer: string;
}
export interface answerPropAdv {
  id: answerSubProp;
}

export interface answerSubProp {
  question: string;
  answer: string;
}
