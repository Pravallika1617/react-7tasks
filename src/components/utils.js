import React from 'react'
import Navbar1 from './navbar';
import "./utils.css"
import { useState } from 'react';

function Utils() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [index, setIndex] = useState(-1);
    const [darkmode, setDarkmode] = useState(false);

    const change = (e) => {
        const val = e.target.value;
        setInput(val);
        // setInput(e.target.value);
        setHistory([...history.slice(0, index + 1), val]);
        setIndex(index + 1);
    };

    const uppercase = () => {
        setInput(input.toUpperCase());
    };

    const lowercase = () => {
        setInput(input.toLowerCase());
    };

    const clear = () => {
        setInput('');
    };

    const reverse = () => {
        setInput(input.split('').reverse().join(''));
    };

    const undo = () => {
        if (index > 0) {
            setIndex(index - 1);
            setInput(history[index - 1]);
        }
    };

    const redo = () => {
        if (index < history.length - 1) {
            setIndex(index + 1);
            setInput(history[index + 1]);
        }
    };

    const wordCount = input.trim().split(/\s+/).filter(Boolean).length;
    const charCount = input.length;

    const dark = () => {
        setDarkmode(!darkmode);
        console.log("clicked");
    }
    return (
        <div className={darkmode ? 'dark-mode' : ''}>
            <Navbar1 />
            <div className='utility' >
                <h1>Enter the text<span><button onClick={ dark}>{darkmode ? 'Light Mode' : 'Dark Mode' }</button></span></h1> 
                <textarea rows="4" cols="50" placeholder='Enter the text here....' value={input} onChange={change}></textarea>
                <div>
                    <button onClick={uppercase}>Convert to Uppercase</button>
                    <button onClick={lowercase}>Convert to Lowercase</button>
                    <button onClick={reverse}>Reverse Text</button>
                    <button onClick={undo}>Undo</button>
                    <button onClick={redo}>Redo</button>
                    <button onClick={clear}>Clear Text</button>
                </div>
                <div className='utility1'>
                    <p><b>{wordCount} words, {charCount} characters</b></p>
                </div>
            </div>
        </div>
    )
}

export default Utils;
