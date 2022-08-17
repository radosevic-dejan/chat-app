
import { auth } from "../firebase/firebaseDb";


export const Msg = ({ message, deleteDoc }) => {
    const { text, name, uid, id } = message;

    const style = 
      uid === auth.currentUser.uid ? " ml-10 bg-lime-300": " mr-10 bg-[#9864F2] text-right";
    const userPosition =
    uid === auth.currentUser.uid ? "left-10": "right-10"

    
    
  return (
    <div className={`mt-4 mb-2 border px-2 py-2 rounded-xl relative ${style}`}>
        <p className={`absolute text-xs text-white font-semibold bottom-8 px-3 py-1 bg-slate-500 rounded-md ${userPosition}`}>{ name }</p>
        <div className="flex justify-between">
        <p className='text-lg'>{ text }</p>
        <button className={`${id === "YAgy8Kt5OLKn6w2RRvaH" ? "hidden" : "inline"} font-bold bg-slate-300 px-2 py-1 rounded-lg`} onClick={() => deleteDoc(id)}>Delete</button>
        </div>
    </div>
  )
}
