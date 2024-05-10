"use client";
import { Check, X } from "lucide-react";

export interface TodoProps {
    id: string;
    title: string;
    completed: boolean;
    toggleTodoCompletion: (id: string) => void;
    deleteTodoById: (id: string) => void;
}

export default function Todo({
    id,
    title,
    completed,
    toggleTodoCompletion,
    deleteTodoById,
}: TodoProps) {
    return (
        <li
            className={`list-none capitalize px-6 py-4 group flex items-center justify-between gap-4 border-b border-border/50`}
        >
            <div
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => {
                    toggleTodoCompletion(id);
                }}
            >
                {completed ? (
                    <div className="bg-gradient-to-r from-first to-second aspect-square rounded-full p-1 text-white">
                        <Check size={13} />
                    </div>
                ) : (
                    <div className="grid place-items-center group-hover:bg-gradient-to-r from-first to-second w-5 aspect-square rounded-full bg-border">
                        <div className="w-4 bg-card aspect-square rounded-full " />
                    </div>
                )}
                <p className={`${completed && "line-through text-muted"}`}>
                    {title}
                </p>
            </div>
            <div
                className="cursor-pointer text-muted hover:bg-transparent hidden group-hover:block"
                onClick={() => {
                    deleteTodoById(id);
                }}
            >
                <X size={16} />
            </div>
        </li>
    );
}
