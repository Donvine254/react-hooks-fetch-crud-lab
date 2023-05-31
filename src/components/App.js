import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

const baseUrl="http://localhost:4000/questions"

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions]= useState([]);


  //fetch the questions using useEffect
  useEffect(() => {
    fetch(baseUrl).then(response=>response.json())
    .then(data=>setQuestions(data))
  }, [])
  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList questions={questions} />}
    </main>
  );
}

export default App;
