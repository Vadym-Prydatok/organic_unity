import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setMessages } from "../store/slices/messageSlice";
import classNames from "classnames";

export const Message = () => {
  const { messages } = useAppSelector((state) => state.messages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      dispatch(setMessages([]));
    }, 8000);

    return () => clearTimeout(messageTimer);
  }, [messages]);

  console.log(messages);

  return (
    <div className={classNames('message', { visible: messages.length > 0})}>
      <button onClick={() => dispatch(setMessages([]))}>X</button>

      <ul className="message__list">
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};
