import { deleteTodoById, toggleTodoCompletion } from "@/app/action";
import Todo from "./todo";

export default function List({ todos }: ListProps) {
    return (
        <>
            {todos.map((todo) => {
                return (
                    <Todo
                        title={todo.title}
                        completed={todo.completed}
                        key={todo.id}
                        id={todo.id}
                        toggleTodoCompletion={toggleTodoCompletion}
                        deleteTodoById={deleteTodoById}
                    />
                );
            })}
        </>
    );
}
