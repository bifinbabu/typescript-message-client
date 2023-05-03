import axios from "axios";
import React, { useEffect, useState } from "react";

const Messages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios
    //   .get("http://localhost:8080/api/messages")
    //   .then((response) => setData(response.data))
    //   .catch((error) => console.log(error));
    const intervalId = setInterval(() => {
      axios
        .get("http://localhost:8080/api/messages")
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Messages</h1>
      <ul style={{ listStyle: "none" }}>
        {data.map((item, index) => (
          <li key={index}>{item?.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
