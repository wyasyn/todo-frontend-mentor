import Todo from "@/components/todo";
import { selectCompletedTodos } from "../action";

export default async function Home() {
    const todos = await selectCompletedTodos();
    if (!todos || todos.length === 0)
        return (
            <div className=" px-6 py-4 text-muted ">
                No completed Todos to display😕
            </div>
        );
    return (
        <>
            {todos.map((todo) => {
                return (
                    <Todo
                        name={todo.title}
                        completed={todo.completed}
                        key={todo.id}
                        id={todo.id}
                    />
                );
            })}
        </>
    );
}
