import React from 'react'
import './RightSidebar.css'
import message from '../../assets/message.svg'
import pen from '../../assets/pen.svg'
import blacklogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <img src={pen} alt='pen'  width='18'/>
            <p >Oberservibility is key to the future of software(and your Devops carreer)</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={pen} alt='pen'  width='18'/>
            <p >Prodcast 374:How Variable is your screen name?</p>
        </div>
        </div>

        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <img src={message} alt='message'  width='18'/>
            <p >Review queue workflow - Final release..... </p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={message} alt='message'  width='18'/>
            <p >Please welcome Valued Associates: #958-V2Blast#959-SpencerG</p>
        </div>
        </div>

        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <img src={blacklogo} alt='blacklogo'  width='18'/>
            <p >Outdated Answers-accepted answers is now unpinned on Stack Overflow</p>
        </div>
        </div>

        
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
           <p>38</p>
            <p > Why has this spam flag declined, yet the question marked as spa,?</p>
        </div>
        <div className='right-sidebar-div-2'>
            <p>20</p>
            <p >What is the best course of action when a user have high enough rep to...</p>
            </div>
            <div className='right-sidebar-div-2'>
            <p>14</p>
            <p>Is a link to the "How to ask" help page usefull comment?</p>
         </div>
        </div>
    </div>
  )
}

export default Widget