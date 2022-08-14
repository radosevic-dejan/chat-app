import { auth } from "../firebase/firebaseDb";
import { useAuthState } from "react-firebase-hooks/auth";
import { Login } from "./Login";
import { LogOut } from "./LogOut";

export const Header = () => {
    const [ user ] = useAuthState(auth);

  return (
    <header className="flex justify-between mt-4 rounded-t-lg bg-[#F4B142]">
        <h1 className='text-center text-4xl font-semibold uppercase text-white pl-2 py-1'>Chat App</h1>
        {
            user ? <LogOut /> : <Login />
        }
    </header>
  )
}
