import { Input } from "./ui/input";
import { addTodo } from "@/app/action";
import AddBtn from "./addBtn";

export default function AddTodo() {
    return (
        <form
            action={addTodo}
            className=" shadow-lg mt-4 bg-card flex items-center gap-2 rounded-lg px-4 py-2 "
        >
            <AddBtn />
            <Input
                className=" placeholder:text-muted bg-transparent border-none outline-none "
                placeholder="Create a new todo..."
                name="title"
                type="text"
            />
        </form>
    );
}
