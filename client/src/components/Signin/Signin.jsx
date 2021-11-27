import React from "react";
import "./signin.css";

const Signin = ({
  username,
  room,
  setUsername,
  setRoom,
  socket,
  setShowChat,
}) => {
  const joinRoom = async (e) => {
    e.preventDefault();

    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="joinChatContainer">
      <form onSubmit={joinRoom}>
        <h3>Join a Room</h3>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default Signin;
