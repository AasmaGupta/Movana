import "./Chatbot.css";

function Chatbot() {
  return (
    <div className="chatbot-container">

      <div className="chatbot-card">

        <h1>MOVE AI Assistant</h1>

        <div className="chat-window">

          <div className="bot-message">
            Hello! How can I help you today?
          </div>

          <div className="user-message">
            I want to book cargo.
          </div>

        </div>

        <input
          type="text"
          placeholder="Type your message..."
        />

        <button>Send</button>

      </div>

    </div>
  );
}

export default Chatbot;