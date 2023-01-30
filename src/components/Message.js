import "./Message.css";

const Message = ({ msg, type }) => {
  return (
    <div class={`message ${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
