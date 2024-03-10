import React from 'react';

interface Todo {
    text: string;
    isCompleted: boolean;
}

interface ListProps {
    todos: Todo[];
    toggleTodo: (index: number) => void;
    deleteTodo: (index: number) => void;
}

const List: React.FC<ListProps> = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index} style={{ textDecoration: todo.isCompleted ? `line-through` : `none` }}>
                    {todo.text}
                    <button onClick={() => toggleTodo(index)}>Toggle</button>
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default List;
