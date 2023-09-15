import React from 'react'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import RightSidebar from '../../component/RightSidebar/RightSidebar'
import HomeMainbar from '../../component/HomeMainbar/HomeMainbar'
import  '../../App.css'



const hour = new Date().getHours();
const cssStyle = {};

if (hour >= 1 && hour < 19) {
  cssStyle.backgroundColor = " rgb(0,206,209)";
} else {
  cssStyle.backgroundColor = "rgb(81, 78, 78)";
}

const Home = () => {
  return (
    <div style={cssStyle} className="home-container-1">
       <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
          <HomeMainbar />
      </div>
       {/* <div className='home-container-3'> */}
     <RightSidebar />
    </div>
 
      </div>
  )
}

export default Home