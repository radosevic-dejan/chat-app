import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase/firebaseDb";


export const SendMsg = ({ scroll }) => {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { uid, displayName } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text,
            name: displayName,
            uid,
            time: serverTimestamp()
        })
        setText('');
        scroll.current.scrollIntoView({ behavior: "smooth" });
    }

  return (
    <form onSubmit={handleSubmit} className="mt-4 border flex gap-2 justify-between py-2 px-4">
        <input className="w-[100%] px-2 py-1 outline-none" type="text" name="msg" value={text} placeholder="Message..." onChange={e => setText(e.target.value)}/>
        <button className="border border-teal-600 py-1 px-2 rounded-md uppercase font-bold text-teal-600 hover:text-slate-200 hover:bg-teal-600">Send</button>
    </form>
  )
}
