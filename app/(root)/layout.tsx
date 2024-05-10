import Footer from "@/components/footer";
import { countActiveTodos, deleteCompletedTodos } from "../action";

export default async function Home({
    children,
}: {
    children: React.ReactNode;
}) {
    let count = await countActiveTodos();
    if (!count) {
        count = 0;
    }
    return (
        <>
            {children}
            <Footer count={count} deleteCompletedTodos={deleteCompletedTodos} />
        </>
    );
}
