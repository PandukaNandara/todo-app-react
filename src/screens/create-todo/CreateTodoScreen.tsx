import React, { useState } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import ButtonComponent from "../../components/buttons/Button";
import Header from "../../components/headers/Header";
import { TaskCard } from "../../components/task/TaskCard";
import TextField from "../../components/textfield/TextField";
import TaskModel from "../../models/TaskModel";

const CreateTodoScreen = () => {
  const [createTaskTextFieldValue, setCreateTaskTextFieldValue] = useState("");

  const [taskList, setTaskList] = useState<TaskModel[]>([]);

  const onCreate = () => {
    const newTask: TaskModel = {
      content: createTaskTextFieldValue,
      date: new Date(),
      done: false,
    };
    setTaskList([newTask, ...taskList]);
  };

  const onComplete = (task: TaskModel) => {
    const list =taskList.map((t) => task.date === t.date ? {...t, done: true} : t);
    setTaskList(list);
  }

  return (
    <>
      <Header />
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
        <ul className="no-bullets">
          {taskList.map((task, i) => (
            <TaskCard onComplete={()=> onComplete(task)} task={task} />
          ))}
        </ul>
      </Container>
    </>
  );
};

export default CreateTodoScreen;
