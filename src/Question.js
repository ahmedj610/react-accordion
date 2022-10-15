import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {

  const [expand, setExpand] = useState(false)

  function expandAccordion() {
    setExpand(prev => !prev)
  }

  return (
    <article className="question">
      <header onClick={expandAccordion}>
        <h4>{title}</h4>
        <button className="btn" onClick={expandAccordion}>
          {
            !expand ?
              <AiOutlinePlus /> :
              <AiOutlineMinus />
          }
        </button>
      </header>
      {
          expand && <p>{info}</p>
      }
    </article>
  )
};

export default Question;
