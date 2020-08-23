import React from "react";

export default function TodoItem({ todo }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.name}
      </label>
    </div>
  );
}
