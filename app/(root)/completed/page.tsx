import { selectCompletedTodos } from "@/app/action";
import List from "@/components/list";

export const revalidate = 0;

export default async function Home() {
    const todos = await selectCompletedTodos();
    if (!todos || todos.length === 0)
        return (
            <div className="px-6 py-4 text-muted">
                No completed Todos to display😕
            </div>
        );
    return <List todos={todos} />;
}
