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
