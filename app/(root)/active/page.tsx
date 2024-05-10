import List from "@/components/list";
import { selectActiveTodos } from "../../action";
export const revalidate = 0;

export default async function Home() {
    const todos = await selectActiveTodos();
    if (!todos || todos.length === 0)
        return (
            <div className="px-6 py-4 text-muted">
                No active Todos to display😕
            </div>
        );
    return <List todos={todos} />;
}
