import Link from "next/link";
import {prisma} from "./db";
import React from "react";

interface TodoType {
    id: number;
    title: string;
    content: string | null;
    published: boolean;
    complete: boolean; // Added complete property
    deleted: boolean; // Added deleted property
}

// Adjusted function definition to match the expected parameter type
const todo = (todo: TodoType, index: number, array: TodoType[]) => {
    // Function logic here
};


export default async function NewItem() {

    function getTodos() {
        return prisma.todo.findMany({
        });
    }
    const todos = await getTodos();

    return (
        <>

            <header className="flex justify-between items-center pb-5">
                <h1 className="text-2xl underline underline-offset-4 ">Todos</h1>
                <Link
                    href="/newitem"
                    className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 outline-none"
                >
                    New
                </Link>
            </header>
            <ul className="pl-4" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                {
                    todos.map((todo : TodoType) => (
                        <li key={todo.id} style={{paddingLeft: '10px'}}>
                            <input type="checkbox"/>
                            {todo.title}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}