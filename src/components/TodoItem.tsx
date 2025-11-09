import type { Todo } from "../App";

export default function TodoItem({
  todo,
  onToggle,
  onRemove,
}: {
  todo: Todo;
  onToggle: () => void;
  onRemove: () => void;
}) {
  return (
    <li className={`todo-item ${todo.done ? "done" : ""}`}>
      <label>
        <input type="checkbox" checked={todo.done} onChange={onToggle} />
        <span className="todo-text">{todo.text}</span>
      </label>
      <button className="remove-btn" onClick={onRemove}>
        ✕
      </button>
    </li>
  );
}
