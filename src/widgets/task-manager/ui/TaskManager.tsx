import { TaskItem } from "@entities/task";
import { useTasks } from "../model/useTasks";
import { AddTaskForm } from "@features/tasks/add-task";
import { DeleteTask } from "@features/tasks/delete-task";

export const TaskManager = () => {
  const { addTask, deleteTask, toggleTask, tasks } = useTasks();

  return (
    <div>
      <AddTaskForm onAdd={addTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task}>
            <DeleteTask task={task} onDelete={deleteTask} />
            <label>
              Завершить
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            </label>
          </TaskItem>
        ))}
      </ul>
    </div>
  );
};
