import "./App.css";
import { useState } from "react";
import io from "socket.io-client";
import Chats from "./components/Chats/Chats";
import Signin from "./components/Signin/Signin";

const socket = io.connect("http://localhost:3001");
console.log(socket);

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="App">
      {!showChat ? (
        <Signin
          socket={socket}
          username={username}
          setUsername={setUsername}
          room={room}
          setRoom={setRoom}
          setShowChat={setShowChat}
        />
      ) : (
        <Chats socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
