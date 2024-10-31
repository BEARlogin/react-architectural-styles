import { Task } from '@entities/task/model/types';

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task, children }: TaskItemProps & { children?: React.ReactNode }) => {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      {children}
    </li>
  );
};