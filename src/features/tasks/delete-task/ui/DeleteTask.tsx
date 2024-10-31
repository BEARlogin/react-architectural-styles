import { Task } from "@entities/task";

export const DeleteTask = ({onDelete, task}: {onDelete: (id: number) => void, task: Task}) => {
    return <button onClick={() => onDelete(task.id)}>Delete</button>
};