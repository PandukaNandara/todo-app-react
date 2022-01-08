import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewTodoScreen from "./screens/view-todo/ViewTodoScreen";
import CreateTodoScreen from "./screens/create-todo/CreateTodoScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewTodoScreen />} />
          <Route path="/create" element={<CreateTodoScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
