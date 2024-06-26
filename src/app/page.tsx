import Link from "next/link";
import {prisma} from "./db";
import ItemTile from "@/app/components/item_tile";

export type TodoType = {
    id: string;
    title: string;
    complete: boolean;
    deleted: boolean;
};

export default async function Home() {
    "use server";
    function getTodos() {
        return prisma.todo.findMany({
        });
    }
    function deleteTodo(id : number) {
        return prisma.todo.delete({
            where: {
                id: id,
            }});
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
            <ul className="pl-4">
                {
                    todos.map(
                        (todo: TodoType) =>
                            <ItemTile id ={""} content={"Nefunguje to"}/>
                    )
                }
            </ul>
        </>
    );
}