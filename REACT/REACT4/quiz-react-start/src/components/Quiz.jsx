import { useState } from 'react';
import questions from "../assets/js/questions.js";


export default function Quiz() {


    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    function handleAnswer(selectedAnswer){
        setUserAnswers(
            (previusAnswer) => {
                return [...previusAnswer, selectedAnswer ]
            }
        );
    }
    return (
        <div>
            <main>
                <div id="quiz">
                    <div id="question">
                        <h2>{questions[activeQuestionIndex].text}</h2>
                        
                        <ul id="answers">
                            {
                           questions[activeQuestionIndex].answers.map((answer) =>
                                <li key={answer}  className="answer">
                                    <button onClick={() => handleAnswer(answer)} >{answer}</button></li>
                            )
                            
                            }
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}