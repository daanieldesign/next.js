ITEMTILE_ import {Avatar} from "@nextui-org/react";
import {BsFillTrash3Fill} from "react-icons/bs";
import {prisma} from "../app/db";

export default function ItemTile(id: string,content: string) {
    function deleteTodo(id : number) {
        return prisma.todo.delete({
            where: {
                id: id,
            }});
    }
    return (
        <div key={id} className="flex flex-row items-center my-10 bg-amber-200 justify-between">
            <Avatar className="size-20"></Avatar>
            {id}{content}
            <button onClick={() => deleteTodo(1)}>
                <BsFillTrash3Fill></BsFillTrash3Fill>
            </button>
        </div>);
}