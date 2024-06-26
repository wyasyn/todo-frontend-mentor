import type { Metadata } from "next";
import { Josefin_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Link from 'next/link'
import Banner from "@/components/banner";
import { ModeToggle } from "@/components/mode-toggle";
import AddTodo from "@/components/addTodo";
import Footer from "@/components/footer";
import { countActiveTodos, deleteCompletedTodos } from "./action";

const fontSans = FontSans({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Todo App",
    description:
        "Manage your tasks effortlessly with our intuitive todo app. Stay organized, track your progress, and never miss a beat with easy task management, task completion tracking, and more.",
    icons: {
        apple: "/fav.png",
        icon: "/fav.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-dvh font-sans antialiased text-sm ",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main>
                        <Banner />
                        <section className=" container -mt-[12rem] z-50 relative ">
                            <header className=" text-white flex items-center justify-between">
                                <h1 className=" font-bold uppercase text-2xl md:text-3xl tracking-widest ">
                                    todo
                                </h1>
                                <ModeToggle />
                            </header>
                            <AddTodo />
                            <div className=" mt-[2rem] bg-card rounded-lg overflow-clip shadow-xl ">
                                <ul>{children}</ul>
                            </div>

                            <p className=" my-[7rem] text-center text-muted ">
                                Developed by <Link href="https://ywalum.com/">Yasin Walum</Link>
                            </p>
                        </section>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
