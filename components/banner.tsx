"use client";
import Image from "next/image";
import largeDark from "@/images/bg-desktop-dark.jpg";
import largeLight from "@/images/bg-desktop-light.jpg";
import smallLight from "@/images/bg-mobile-light.jpg";
import smallDark from "@/images/bg-mobile-dark.jpg";
import { useTheme } from "next-themes";

export default function Banner() {
    const { theme } = useTheme();
    return (
        <div className=" h-[300px] ">
            <div className=" bg-slate-500 relative w-full h-full md:hidden ">
                <Image
                    src={theme === "light" ? smallLight : smallDark}
                    className=" w-full h-full "
                    fill
                    alt="banner"
                    priority
                    placeholder="blur"
                />
            </div>
            <div className=" bg-slate-600 relative w-full h-full md:block hidden ">
                <Image
                    src={theme === "light" ? largeLight : largeDark}
                    className=" w-full h-full "
                    fill
                    alt="banner"
                    priority
                    placeholder="blur"
                />
            </div>
        </div>
    );
}
