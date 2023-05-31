import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

const baseUrl = "http://localhost:4000/questions";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  //fetch the questions using useEffect
  useEffect(() => {
    try {
      async function getQuestions() {
        const response = await fetch(baseUrl);
        if (response.ok) {
          const data = await response.json();
          setQuestions(data);
        } else throw new Error("Request failed with status " + response.status);
      }
      getQuestions();
    } catch (error) {
      console.error(error);
    }
  }, [questions]);

  //function to add new questions
  function handleNewQuestions(newQuiz){
    console.log(newQuiz);
    setQuestions((prevQuiz)=>[...prevQuiz, newQuiz])
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm addQuestion={handleNewQuestions}/>
      ) : (
        <QuestionList questions={questions} />
      )}
    </main>
  );
}

export default App;
