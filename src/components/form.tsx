import React, { useState } from 'react';

interface FormProps {
    addTodo: (text: string) => void;
}

const Form: React.FC<FormProps> = ({ addTodo }) => {
    const [value, setValue] = useState<string>(``);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.trim()) return;
        addTodo(value);
        setValue(``);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
