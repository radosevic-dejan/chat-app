import { useState, useEffect, useRef } from "react";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
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
  return (
    <div>
      <main>
        {messages &&
          messages.map((message) => {
            return <Msg key={message.id} message={message} />;
          })}
      </main>
      <SendMsg scroll={scroll} />
      <span ref={scroll}></span>
    </div>
  );
};
