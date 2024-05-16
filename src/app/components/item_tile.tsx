"use client"
import {Avatar} from "@nextui-org/react";
import {BsFillTrash3Fill} from "react-icons/bs";
import {prisma} from "@/app/db";
export default async function ItemTile(props: ItemTileProps) {

    function deleteTodo(id : number) {
        return prisma.todo.delete({
            where: {
                id: id,
            }});
    }
    return (
        <div key={props.id} className="flex flex-row items-center my-10 bg-amber-200 justify-between">
            <Avatar className="size-20"/>
            {props.id}{props.content}
            <button onClick={() => deleteTodo(1)}>
                <BsFillTrash3Fill/>
            </button>
        </div>);
}
interface ItemTileProps{
    id: string
    content: string
}