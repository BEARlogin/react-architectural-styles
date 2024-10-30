import  { useState } from 'react';

interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

export const AddTaskForm = ({ onAdd }: AddTaskFormProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Новая задача"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};
