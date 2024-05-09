import type { Metadata } from "next";
import { Josefin_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Banner from "@/components/banner";
import { ModeToggle } from "@/components/mode-toggle";
import AddTodo from "@/components/addTodo";
import Footer from "@/components/footer";
import { countActiveTodos } from "./action";

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
    openGraph: {
        images: [
            {
                url: "/twitter.jpg",
                width: 1200,
                height: 630,
                alt: "todo",
            },
        ],
    },
    twitter: {
        creator: "@wyasyn",
        site: "@todo_app",
        card: "summary_large_image",
        images: [
            {
                url: "/twitter.jpg",
                width: 1200,
                height: 630,
                alt: "todo",
            },
        ],
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const count = await countActiveTodos();
    if (!count) return 0;
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
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
                                {children}
                                <Footer count={count} />
                            </div>

                            <p className=" my-[7rem] text-center text-muted ">
                                Drag and drop to reorder list
                            </p>
                        </section>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
