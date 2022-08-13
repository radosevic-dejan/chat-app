import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebaseDb'
import { Header } from "./components/Header"
import { Chat } from './components/Chat';

function App() {
  const [ user ] = useAuthState(auth);
  console.log(user)
  return (
    <div className="flex flex-col max-w-[600px] mx-auto">
     <Header />
     <Chat />
    </div>
  )
}

export default App
