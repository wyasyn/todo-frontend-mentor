import Todo from "@/components/todo";
import { selectAllTodos } from "./action";

export default async function Home() {
    const todos = await selectAllTodos();
    if (!todos || todos.length === 0)
        return (
            <div className=" px-6 py-4 text-muted ">No Todos to display😕</div>
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
