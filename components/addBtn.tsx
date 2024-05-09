"use client";
import { Circle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function AddBtn() {
    const { pending } = useFormStatus();
    return (
        <Button
            disabled={pending}
            size="icon"
            variant="ghost"
            className=" hover:bg-transparent "
        >
            {pending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
                <Circle className="text-border" />
            )}

            <span className=" sr-only ">Add to-do</span>
        </Button>
    );
}
