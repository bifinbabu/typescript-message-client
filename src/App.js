import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    try {
      e.preventDefault();
      console.log("send");
      const res = await axios.post(
        `http://localhost:8080/api/messages/${message}`
      );
      console.log(res);
      setMessage("");
      window.location.reload();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="App">
      <h1>Chat</h1>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter text"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
