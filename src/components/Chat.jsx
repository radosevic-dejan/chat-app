import { useState, useEffect, useRef } from "react";
import { query, collection, orderBy, onSnapshot, doc, deleteField } from "firebase/firestore";
import { db } from "../firebase/firebaseDb";
import { Msg } from "./Msg";
import { SendMsg } from "./SendMsg";

export const Chat = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("time"));
    const unsubscribe = onSnapshot(q, (qSnapshot) => {
      let msgs = [];
      qSnapshot.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
      });
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

 
  console.log(messages)

  return (
    <div>
      <main>
        {messages &&
          messages.map((message) => {
            const msgId = message.id;
            return <Msg key={msgId} message={message} />;
          })}
      </main>
      <SendMsg scroll={scroll} />
      <span ref={scroll}></span>
    </div>
  );
};
