import React, { useState, useRef } from 'react'
import './quiz.css'
import Navbar1 from './navbar';
import { data } from '../data'

function Quiz() {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);

    const option_array = [option1, option2, option3, option4];


    const answer = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add('correct');
                setLock(true);
                setScore(prev => prev + 1)
            } else {
                e.target.classList.add('wrong');
                setLock(true);
                option_array[question.ans - 1].current.classList.add('correct');
            }
        }
    };

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(prevIndex => prevIndex + 1);
            setLock(false);
            setQuestion(data[index + 1]);

            option_array.map((option) => {
                if (option.current) {
                    option.current.classList.remove('wrong');
                    option.current.classList.remove('correct');
                }
                return null;
            })
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return (
        <div>
            <Navbar1 />
            <div className='quiz-app'>
                <h1>Quiz App</h1>
                <hr />
                {result ? <></> : <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={option1} onClick={(e) => { answer(e, 1) }}>{question.option1}</li>
                        <li ref={option2} onClick={(e) => { answer(e, 2) }}>{question.option2}</li>
                        <li ref={option3} onClick={(e) => { answer(e, 3) }}>{question.option3}</li>
                        <li ref={option4} onClick={(e) => { answer(e, 4) }}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className='index'>{index + 1} of {data.length} Questions</div>
                </>}
                {result ? <>
                    <h2>Your Score {score} out of {data.length}</h2>
                    <button onClick={reset}>Reset</button></> : <></>}

            </div>
        </div>
    )
}

export default Quiz;
