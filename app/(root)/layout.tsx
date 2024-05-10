import Footer from "@/components/footer";
import { countActiveTodos, deleteCompletedTodos } from "../action";

export default async function Home({
    children,
}: {
    children: React.ReactNode;
}) {
    const count = await countActiveTodos();
    if (!count) return 0;
    return (
        <>
            {children}
            <Footer count={count} deleteCompletedTodos={deleteCompletedTodos} />
        </>
    );
}
