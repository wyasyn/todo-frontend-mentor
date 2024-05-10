interface TodoItem {
    title: string;
    completed: boolean;
    id: string;
    createdAt: Date;
}

interface ListProps {
    todos: TodoItem[];
}
