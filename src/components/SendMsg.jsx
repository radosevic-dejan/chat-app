import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase/firebaseDb";


export const SendMsg = () => {
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
    }

  return (
    <form>
        <input type="text" name="msg" value={text} placeholder="Message..." onChange={e => setText(e.target.value)}/>
        <button>Send</button>
    </form>
  )
}
