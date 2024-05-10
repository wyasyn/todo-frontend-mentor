"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "All",
        url: "/",
    },
    {
        name: "Active",
        url: "/active",
    },
    {
        name: "Completed",
        url: "/completed",
    },
];

export default function Footer({
    count,
    deleteCompletedTodos,
}: {
    count: number;
    deleteCompletedTodos: () => void;
}) {
    const pathname = usePathname();
    return (
        <footer className="flex items-center px-6 py-4 text-muted justify-between">
            <p>{count} items left</p>
            <ul className="flex items-center justify-center gap-4">
                {links.map((link) => {
                    const isActive = pathname === link.url;
                    return (
                        <li
                            key={link.name}
                            className={
                                isActive
                                    ? "text-primary"
                                    : "text-muted hover:text-card-foreground"
                            }
                        >
                            <Link href={link.url}>{link.name}</Link>
                        </li>
                    );
                })}
            </ul>
            <div
                className="hover:text-card-foreground cursor-pointer"
                onClick={() => {
                    deleteCompletedTodos();
                }}
            >
                Clear Completed
            </div>
        </footer>
    );
}
