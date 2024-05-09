"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteCompletedTodos() {
    try {
        const deletedTodos = await prisma.todo.deleteMany({
            where: {
                completed: true,
            },
        });
        revalidatePath("/");
        revalidatePath("/completed");
        return {
            message: `Deleted ${deletedTodos.count} completed todos`,
        };
    } catch (error) {
        return {
            message: "Error deleting completed todos:",
            error,
        };
    }
}

export async function addTodo(FormData: FormData) {
    const title = FormData.get("title") as string;
    try {
        const newTodo = await prisma.todo.create({
            data: {
                title: title,
            },
        });

        revalidatePath("/");

        return {
            message: "New todo added:",
            newTodo,
        };
    } catch (error) {
        return {
            message: "Error adding todo:",
            error,
        };
    }
}

export async function toggleTodoCompletion(id: string) {
    try {
        const todo = await prisma.todo.findUnique({
            where: {
                id: id,
            },
        });

        if (!todo) {
            console.error("Todo not found");
            return;
        }

        const updatedTodo = await prisma.todo.update({
            where: {
                id: id,
            },
            data: {
                completed: !todo.completed,
            },
        });
        revalidatePath("/");
        return {
            message: "Todo completion status toggled:",
            updatedTodo,
        };
    } catch (error) {
        return {
            message: "Error toggling todo completion status:",
            error,
        };
    }
}

export async function selectAllTodos() {
    try {
        const allTodos = await prisma.todo.findMany();

        return allTodos;
    } catch (error) {
        console.error("Error selecting all todos:", error);
    }
}

export async function selectActiveTodos() {
    try {
        const activeTodos = await prisma.todo.findMany({
            where: {
                completed: false,
            },
        });

        return activeTodos;
    } catch (error) {
        console.error("Error selecting active todos:", error);
    }
}

export async function selectCompletedTodos() {
    try {
        // Execute Prisma query to select completed todos
        const completedTodos = await prisma.todo.findMany({
            where: {
                completed: true,
            },
        });

        return completedTodos;
    } catch (error) {
        console.error("Error selecting completed todos:", error);
    }
}

export async function deleteTodoById(id: string) {
    try {
        const deletedTodo = await prisma.todo.delete({
            where: {
                id: id,
            },
        });
        revalidatePath("/");
        revalidatePath("/completed");
        revalidatePath("/active");

        return {
            message: "Deleted todo:",
            deletedTodo,
        };
    } catch (error) {
        return {
            message: "Error deleting todo:",
            error,
        };
    }
}

export async function countActiveTodos() {
    try {
        // Execute Prisma query to count active todos
        const count = await prisma.todo.count({
            where: {
                completed: false,
            },
        });

        return count;
    } catch (error) {
        console.error("Error counting active todos:", error);
    }
}
