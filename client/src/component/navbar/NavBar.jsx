import React, { useEffect } from "react";
import { Link, useNavigate }  from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import logo from '../../assets/logo.png'
import Search  from  '../../assets/Search.svg'
import decode from 'jwt-decode'
//import Button from  '../../component/Button/Bottom'
import Avatar from '../../component/Avatar/Avatar'

import './NavBar.css'
import { setCurrentUser } from "../../actions/currentUser";


const NavBar = () =>{
    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))

    const navigate = useNavigate() 
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token;
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime() ){
                handleLogout()
            }
        }
       dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

    return (
       <nav className="main-nav">
        <div className="navbar">
            <Link to='/'  className='nav-item  nav-logo'>
                <img src={logo} alt='logo' width='150px' height='50px'/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>

            <form>
                <input type="text" placeholder='Search....'/>
                <img src={Search} alt="Search" width="18"  className="search-icon"/>
            </form>
             { User === null ? 
            <Link to='/Auth'  className='nav-item nav-link'>Log in</Link> :
            <>
           <Avatar backgroungColor="#009dff" px="10px" py="7px" borderRadius="50%"  color="black"><Link to={`/Users/${User?.result?._id}`} className="Avatar-icon" style={{color:"white" , textDecoration:"none"}}> {User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className="nav-item nav-link" onClick={handleLogout} >Log out</button>
            </>   
}
        </div>
       
       </nav>
    )
}
export default NavBar;

