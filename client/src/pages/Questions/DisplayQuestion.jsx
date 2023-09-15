import React from 'react'
import RightSidebar from '../../component/RightSidebar/RightSidebar'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import QuestionsDetails from  './QuestionsDetails'

const hour = new Date().getHours();
  const cssStyle = {};

  if (hour >= 1 && hour < 19) {
    cssStyle.backgroundColor = " rgb(0,206,209)";
  } else {
    cssStyle.backgroundColor = "rgb(81, 78, 78)";
  }

const DisplayQuestion = () => {
  return (

    <div style={cssStyle} className="home-container-1">
        <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
       <QuestionsDetails />
       <RightSidebar /> 
      </div>
    </div> 
    </div>
  )
}

export default DisplayQuestion   