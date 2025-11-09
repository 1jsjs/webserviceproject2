import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

export default function TodoInsert({
  onAdd,
}: {
  onAdd: (text: string) => void;
}) {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };

  return (
    <form className="insert-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="오늘 할 일을 입력하세요"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}
