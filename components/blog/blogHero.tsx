import Link from "next/link";
import { Container } from "@/components/container";
// import { TransactionsIllustration } from "./trans";
// import { Button } from "./ui/button";

export const BlogHero = () => {
    return (
        <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
            <Container>
                <div className="">
                    <div className="relative z-10">
                        <h1 className="text-6xl font-bold text-balance tracking-tight ">
                        Navigating the Crypto Security with BlocHack
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 text-balance w-3/5">
                        Meticulously curated repository of hacks and rugpulls, providing valuable insights into the evolving crypto threats.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};
