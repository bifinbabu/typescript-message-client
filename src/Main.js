import React from "react";
import App from "./App";
import Messages from "./Messages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Main = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
