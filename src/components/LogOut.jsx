import { auth } from "../firebase/firebaseDb";

export const LogOut = () => {

    const signOut = () => {
        signOut(auth);
    }
  return (
    <div className="py-1 pr-2">
        <button className="text-white font-semibold mt-0.5 py-1 px-3 bg-[#4285F4] rounded-lg hover:text-[#4285F4] hover:bg-white" onClick={() => auth.signOut()}>Logout</button>
    </div>
  )
}
