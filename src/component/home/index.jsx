import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [roomId, setRoomId] = useState("");

  const navigate = useNavigate()

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    setRoomId(roomId);
    navigate(`room/${roomId}`);
  };

  console.log(roomId);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="">Room Id</label>
          <input
            type="text"
            value={roomId}
            required
            onChange={(e) => setRoomId(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
