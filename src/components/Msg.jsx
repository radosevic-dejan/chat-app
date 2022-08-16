import { auth } from "../firebase/firebaseDb";


export const Msg = ({ message, handleDelete }) => {

    const { text, name, uid } = message;
    const style = 
      uid === auth.currentUser.uid ? " ml-10 bg-lime-300": " mr-10 bg-[#9864F2] text-right";
    const userPosition =
    uid === auth.currentUser.uid ? "left-10": "right-10"
    
  return (
    <div className={`mt-4 mb-2 border px-2 py-2 rounded-xl relative ${style}`}>
        <p className={`absolute text-xs text-white font-semibold bottom-8 px-3 py-1 bg-slate-500 rounded-md ${userPosition}`}>{ name }</p>
        <div className="flex justify-between">
        <p className='text-lg'>{ text }</p>
        <button className="font-bold pr-2" onClick={handleDelete}>X</button>
        </div>
    </div>
  )
}
