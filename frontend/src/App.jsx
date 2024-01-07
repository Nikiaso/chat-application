import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Chat from "./Pages/Chat.jsx";  

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/chats" component={Chat} />
    </div>
  );
}

export default App;
