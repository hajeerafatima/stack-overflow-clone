import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import {useSelector } from 'react-redux'
import QuestionList from  './QuestionsList'
import  './HomeMainbar.css'
import Questions from './Questions'

// const hour = new Date().getHours();
// const cssStyle = {};

// if (hour >= 1 && hour < 19) {
//   cssStyle.backgroundColor = "red";
// } else {
//   cssStyle.backgroundColor = "rgb(81, 78, 78)";
// }
const HomeMainbar = () => {

  

  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

   const questionsList = useSelector(state => state.questionsReducer);
   // console.log(questionsList);

  //  var questionsList = [{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: 'what is a function?',
  //   questionBody: 'It meant to be',
  //   questionTags: ["java", "node js", "react js", "mongo db"],
  //   userPosted: "mono",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "fatima",
  //     asnweredOn: "jan 2",
  //     userId: 2
  //   }]
  // },{
  //   _id: 2,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: 'what is a function?',
  //   questionBody: 'It meant to be',
  //   questionTags: ["java", "node js", "react js", "mongo db"],
  //   userPosted: "mono",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "fatima",
  //     asnweredOn: "jan 2",
  //     userId: 2
  //   }]
  // },{
  //   _id: 3,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: 'what is a function?',
  //   questionBody: 'It meant to be',
  //   questionTags: ["java", "node js", "react js", "mongo db"],
  //   userPosted: "mono",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "fatima",
  //     asnweredOn: "jan 2",
  //     userId: 2
  //   }]
  // }]

    const checkAuth= () =>{
      if(user === null){
          alert("login or sign up to as per question");
          navigate('/Auth');
      }else{
        navigate('/AskQuestion')
      }
    }
  return (
    // <div style={cssStyle} className="home-container-1">
    <div className='main-div'>
      <div className='main-bar-header'> 
       {
        location.pathname === '/' ? (<h1>Top Questions</h1>) : (<h1>All Questions</h1>)
       }
       <button onClick={checkAuth}  className='ask-btn'>Ask Question </button>
    </div>
    <div>
      {
        questionsList.data  === null ? 
        <h1>Loading....</h1> :
        <>
         <p>{questionsList?.data.length} questions </p>
         <QuestionList questionsList={questionsList.data} />
          
          </>
      }
    </div>
 </div>
//  </div>
  )
}

export default HomeMainbar;