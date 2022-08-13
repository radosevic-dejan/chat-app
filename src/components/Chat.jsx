import { useState, useEffect, useRef } from "react";
import { query, collection, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebaseDb";
import { Msg } from "./Msg";
import { SendMsg } from "./SendMsg";

export const Chat = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("time"));
    const unsubscribe = q.onSnapshot(snapshot => {
      const msgs = snapshot.docs.map(doc => doc.data());
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, [])
  return (
    <div>
      <main>
        {
            messages && messages.map(message => {
                return (
                    <Msg key={ message.id } message={ message } />
                )
            })
        }
        <SendMsg />
      </main>
      <span>{}</span>
    </div>
  );
};
