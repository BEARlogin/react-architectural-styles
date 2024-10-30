import { TaskItem } from "@entities/task";
import { useTasks } from "../model/useTasks";
import { AddTaskForm } from "@features/tasks/add-task";

export const TaskManager = () => {
  const { addTask,deleteTask,toggleTask,tasks} = useTasks();

  return (
    <div>
      <AddTaskForm onAdd={addTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => toggleTask(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};
