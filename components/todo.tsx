"use client";
import { deleteTodoById, toggleTodoCompletion } from "@/app/action";
import { Check, X } from "lucide-react";

type todoProps = {
    id: string;
    name: string;
    completed: boolean;
};

export default function Todo({ id, name, completed }: todoProps) {
    return (
        <li
            className={` list-none capitalize px-6 py-4 group flex items-center justify-between gap-4 border-b border-border/50 `}
        >
            <div
                className=" flex items-center gap-4 cursor-pointer "
                onClick={() => {
                    toggleTodoCompletion(id);
                }}
            >
                {completed ? (
                    <div className=" bg-gradient-to-r from-first to-second aspect-square rounded-full p-1 text-white">
                        <Check size={13} />
                    </div>
                ) : (
                    <div className=" grid place-items-center group-hover:bg-gradient-to-r from-first to-second w-5 aspect-square rounded-full bg-border">
                        <div className=" w-4 bg-card aspect-square rounded-full " />
                    </div>
                )}
                <p className={`${completed && "line-through text-muted"}`}>
                    {name}
                </p>
            </div>
            <div
                className=" cursor-pointer text-muted hover:bg-transparent hidden group-hover:block "
                onClick={() => {
                    deleteTodoById(id);
                }}
            >
                <X size={16} />
            </div>
        </li>
    );
}
