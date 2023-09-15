import React, { useState } from 'react'
import './user-notification.css'

import {
  ChakraProvider,
  theme,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Container,
  Box,
  Link
} from '@chakra-ui/react';

async function notifyUser(notificationText = "thank you for enable this notification") {
    if(!("Notification" in window )) {
      alert("Browser does not suppot Notification");
    }else if(Notification.permission === "granted") {
      const notification = new Notification(notificationText);
    } else if (Notification.permission !== "denied") {
      await Notification.requestPermission().then((permission) => {
        if(permission === "granted") {
          const notification = new Notification(notificationText);         
        }
      });
    }
  }
 function UserNotification() {
  const [ userResponded, setUserResponded ] = useState(false);

  async function enableNotifsAndClose() {
     await notifyUser().then(() => {
        setUserResponded(true);
        
     });
  }
  function disableNotifsAndClose() {
    setUserResponded(true);
  }
  
 

    return ( !(userResponded) && !(Notification.permission === "granted")) ? (

  <ChakraProvider theme={theme}>
      <Container className='notifs-container'> 
        <Alert status="success">
          <AlertIcon />
          <Box>
            <AlertTitle>
              <AlertDescription>  
                would you like to enable notifications?
              </AlertDescription>
            </AlertTitle>
            </Box>
            <Button colorScheme='teal' size='sm' onClick={enableNotifsAndClose}>
              Sure!
            </Button>
            <Button colorScheme='grey' size='sm' onClick={disableNotifsAndClose}>
              No Thanks !
            </Button>
        </Alert>
      </Container>
  </ChakraProvider>
  ) : (Notification.permission === "granted") ? (
    <ChakraProvider theme={theme}>
        <Button colorScheme='gray' size='sm'  className='btn1' onClick={() =>{ notifyUser("you have successfully Login to this page,thank you"  );
           window.location.href = "https://github.com/hajeerafatima/stack-overflow-clone.git";
       }}>
  If You Want to Check the Source code of this hole Website then Click Here
        </Button>
  </ChakraProvider>
  ) :
  <>
   <h1>you have disabled notification</h1>
  </>
}


export default UserNotification
