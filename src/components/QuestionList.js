import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      {questions?<ul>{questions.map((question)=><QuestionItem key={question.id} question={question}/>)}</ul>:<p>No Questions Found</p>}
      
    </section>
  );
}

export default QuestionList;
