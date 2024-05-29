import Link from "next/link";
import { Container } from "@/components/container";

export const BlogPageHero = () => {
    return (
        <div className="overflow-hidden">
            <Container>
                <div className="bg-[url('/images/blogjumbo.png')] bg-no-repeat h-screen">
                    <h1 className="text-5xl font-bold tracking-tight">
                    Phishing Defense Powered by BlocHack
                    </h1>
                </div>
            </Container>
        </div>
    );
};
