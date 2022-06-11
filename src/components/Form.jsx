import React from 'react'
import { useState } from 'react';

function Form(props) {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim() === '') return

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });

    setInput('');
  }

  return (
    <form style={
      {marginBottom: "32px"}
    }>
      <input type="text" className='input' value={input} onChange={handleChange}/>
      <button className='button' onClick={handleSubmit}>
        Add
      </button>
    </form>
  )
}

export default Form