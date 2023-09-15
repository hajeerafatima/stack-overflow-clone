import React from 'react'
import Questions from './Questions'
import  './HomeMainbar.css'

const QuestionsList = ({questionsList}) => {
  return (
        <>
        {
          questionsList.map((questions) => (
            <Questions question={questions} key={questions.id}/>
          ))
         } 
          </>

  )
}

export default QuestionsList