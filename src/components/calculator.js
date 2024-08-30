import React, { useState } from 'react'
import "./calculator.css"
import Navbar1 from "./navbar";

function Calculator() {
    const[value, setValue] = useState('');

    const handleClick = (e) => {
        setValue(value + e.target.value); 
    }

    const allClear = (e) => {
        setValue('');
    }

    const clear = (e) => {
        setValue(value.slice(0,-1));
    } 

    const evaluate = (e) => {
        setValue(eval(value));
    }
    return (

        <>
        <Navbar1 />
            <div className='container'>
            
            <div className='calculator'>
                <form className='form'>
                    <div className='display'>
                        <input type='text' value={value}/>
                    </div>
                    <div>
                        <input type='button' value='AC' onClick={allClear}/>
                        <input type='button' value='DEL' onClick={clear}/>
                        <input type='button' value='%' onClick={handleClick}/>
                        <input type='button' value='+' onClick={handleClick}/>
                    </div>
                    <div>
                        <input type='button' value='7' onClick={handleClick}/>
                        <input type='button' value='8' onClick={handleClick}/>
                        <input type='button' value='9' onClick={handleClick}/>
                        <input type='button' value='-' onClick={handleClick}/>
                    </div>
                    <div>
                        <input type='button' value='4' onClick={handleClick}/>
                        <input type='button' value='5' onClick={handleClick}/>
                        <input type='button' value='6' onClick={handleClick}/>
                        <input type='button' value='*' onClick={handleClick}/>
                    </div>
                    <div>
                        <input type='button' value='1' onClick={handleClick}/>
                        <input type='button' value='2' onClick={handleClick}/>
                        <input type='button' value='3' onClick={handleClick}/>
                        <input type='button' value='/' onClick={handleClick}/>
                    </div>
                    <div>
                        <input type='button' value='0' onClick={handleClick}/>
                        <input type='button' value='.' onClick={handleClick}/>
                        <input type='button' value='=' className='equal' onClick={evaluate}/>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Calculator;
