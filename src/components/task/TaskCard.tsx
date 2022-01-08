import { Card } from "react-bootstrap";
import TaskModel from "../../models/TaskModel";
import ButtonComponent from "../buttons/Button";

interface Props {
  task: TaskModel;
  onComplete: ()=> void;
}

export const TaskCard: React.FC<Props> = ({ task, onComplete }) => {
  return (
    <Card
      className="m-1"
      bg={task.done ? "success" : undefined}
      text={task.done ? "white" : undefined}
    >
      <Card.Body>
        <Card.Title>{task.content}</Card.Title>
        {task.date.toString()}
        <ButtonComponent onClick={onComplete} disabled={task.done} variant="outline-success">
          Done
        </ButtonComponent>
      </Card.Body>
    </Card>
  );
};
