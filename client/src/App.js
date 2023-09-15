import { BrowserRouter as Router} from 'react-router-dom';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';
import UserNotification from './component/userinotification/user-notification';

import './App.css';
import  NavBar from  './component/navbar/NavBar'
import AllRoutes from './AllRoutes'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from  './actions/users';

function App() {

      const dispatch = useDispatch()
    useEffect(() =>{
      dispatch(fetchAllQuestions())
      dispatch(fetchAllUsers())
  }, [dispatch])


  return (  
    <div className="App">
     <Router> 
     <NavBar/>
     <AllRoutes />
     </Router>
     <ChakraProvider theme={theme}>  
     <UserNotification/>
     </ChakraProvider>
   </div>
    
  )
}

export default App
