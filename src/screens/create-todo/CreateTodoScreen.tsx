import React, { useState } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import ButtonComponent from "../../components/buttons/Button";
import Header from "../../components/headers/Header";
import { TaskCard } from "../../components/task/TaskCard";
import TextField from "../../components/textfield/TextField";
import TaskModel from "../../models/TaskModel";
import { useAppDispatch } from "../../reducer/store";
import { addNewTask } from "../../reducer/TaskSlice";

const CreateTodoScreen = () => {
  const [createTaskTextFieldValue, setCreateTaskTextFieldValue] = useState("");
  const dispatcher = useAppDispatch();
  const onCreate = () => {
    dispatcher(
      addNewTask({
        content: createTaskTextFieldValue,
        date: new Date(),
        done: false,
      })
    );
  };

  return (
    <>
      <Container>
        <TextField
          type="text"
          label="Task"
          placeholder="Enter Task Description"
          onChange={(e) => {
            setCreateTaskTextFieldValue(e);
          }}
        />
        <ButtonComponent onClick={onCreate}>CREATE</ButtonComponent>
      </Container>
    </>
  );
};

export default CreateTodoScreen;
