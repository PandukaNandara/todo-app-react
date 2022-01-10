import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewTodoScreen from "./screens/view-todo/ViewTodoScreen";
import CreateTodoScreen from "./screens/create-todo/CreateTodoScreen";
import Header from "./components/headers/Header";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ViewTodoScreen />} />
          <Route path="/create" element={<CreateTodoScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
