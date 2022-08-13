import { auth } from "../firebase/firebaseDb";

export const LogOut = () => {

    const signOut = () => {
        signOut(auth);
    }
  return (
    <div className="py-1 pr-2">
        <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  )
}
