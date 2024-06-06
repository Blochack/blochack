import Link from "next/link";
import { Container } from "@/components/container";
// import { TransactionsIllustration } from "./trans";
// import { Button } from "./ui/button";

export const BlogHero = () => {
    return (
        <div className="overflow-hidden sm:pt-32 lg:pb-20 xl:pb-20 md:pt-32 md:pb-20">
            <Container>
                <div className="">
                    <div className="relative z-10 md:w-6/12 sm:w-full">
                        <h1 className="text-5xl font-bold tracking-tight">
                        Navigating the Crypto Security with BlocHack
                        </h1>
                        <p className="mt-4 text-base text-slate-300">
                        Meticulously curated repository of hacks and rugpulls, providing valuable insights into the evolving crypto threats.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};
