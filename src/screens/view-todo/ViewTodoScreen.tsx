import { Nav, Container, Navbar } from "react-bootstrap";
import Header from "../../components/headers/Header";
import { TaskCard } from "../../components/task/TaskCard";
import TaskModel from "../../models/TaskModel";
import { useAppSelector } from "../../reducer/store";
import { useAppDispatch } from "../../reducer/store";
import { markAsDone } from "../../reducer/TaskSlice";

const ViewTodoScreen = () => {
  const taskList = useAppSelector((state)=> state.task.tasks);
  const dispatcher = useAppDispatch();
  const onComplete = (task: TaskModel) => {
    dispatcher(markAsDone(task));
  }

  return (
    <>
      <ul className="no-bullets">
        {taskList.map((task, i) => (
          <TaskCard onComplete={() => onComplete(task)} task={task} />
        ))}
      </ul>
    </>
  );
};

export default ViewTodoScreen;
