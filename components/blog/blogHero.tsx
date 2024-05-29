import Link from "next/link";
import { Container } from "@/components/container";
// import { TransactionsIllustration } from "./trans";
// import { Button } from "./ui/button";

export const BlogHero = () => {
    return (
        <div className="overflow-hidden pt-20 sm:py-32 lg:pb-32 xl:pb-36">
            <Container>
                <div className="">
                    <div className="relative z-10 w-6/12">
                        <h1 className="text-5xl font-bold tracking-tight ">
                        Navigating the Crypto Security with BlocHack
                        </h1>
                        <p className="mt-6 text-xl text-gray-600">
                        Meticulously curated repository of hacks and rugpulls, providing valuable insights into the evolving crypto threats.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};
