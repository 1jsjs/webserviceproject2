import type { Todo } from "../App";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onToggle,
  onRemove,
}: {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <ul className="todo-list">
      {todos.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={() => onToggle(t.id)}
          onRemove={() => onRemove(t.id)}
        />
      ))}
    </ul>
  );
}
