import './App.css';
import Chat from '../src/components/Chat'
import Sign from '../src/components/Signin'
import {auth} from './firebase'
import{useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
   <>
   {
    user?<Chat/>:<Sign/>
   }
   
   
   </>
  );
}

export default App;