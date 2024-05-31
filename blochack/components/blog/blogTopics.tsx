import Link from "next/link";
import { Container } from "@/components/container";
import { BlogNav } from "@/components/blog/blogNav";
// import { Button } from "./ui/button";

export const BlogTopics = () => {
    return (
        <div className="overflow-hidden pb-44">
            <Container>
                {/* <BlogNav /> */}
                <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1">
                    <Link href="/blog">
                        <div className="mt-8 group">
                            <div className="relative cursor-pointer bg-[url('/images/blogImg1.png')] rounded-xl h-[266px] group-hover:scale-105 group-hover:bg-white transition duration-1000 ease-in-out">
                                <p className="absolute right-4 top-4 bg-[rgba(39,42,50,0.6)] text-sm py-2 px-4 bg-transparent-100 rounded-full">Partnership</p>
                            </div>
                            <div>
                                <p className="text-xl w-4/5 py-4">Phishing Defense Powered by BlocHack</p>
                                <p className="w-full h-2 border-b border-gray-800"></p>
                                <p className="mt-6 group-hover:text-primary group-hover:motion-safe:animate-bounce duration-1000 delay-100 transition ease-in-out">Learn More</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/blog">
                        <div className="mt-8 group">
                            <div className="relative cursor-pointer bg-[url('/images/blogImg2.png')] rounded-xl h-[266px] group-hover:scale-105 group-hover:bg-white transition duration-1000 ease-in-out">
                                <p className="absolute right-4 top-4 bg-[rgba(39,42,50,0.6)] text-sm py-2 px-4 bg-transparent-100 rounded-full">Partnership</p>
                            </div>
                            <div>
                                <p className="text-xl w-4/5 py-4">Phishing Defense Powered by BlocHack</p>
                                <p className="w-full h-2 border-b border-gray-800"></p>
                                <p className="mt-6 group-hover:text-primary group-hover:motion-safe:animate-bounce duration-1000 delay-100 transition ease-in-out">Learn More</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/blog">
                        <div className="mt-8 group">
                            <div className="relative cursor-pointer bg-[url('/images/blogImg3.png')] rounded-xl h-[266px] group-hover:scale-105 group-hover:bg-white transition duration-1000 ease-in-out">
                                <p className="absolute right-4 top-4 bg-[rgba(39,42,50,0.6)] text-sm py-2 px-4 bg-transparent-100 rounded-full">Partnership</p>
                            </div>
                            <div>
                                <p className="text-xl w-4/5 py-4">Phishing Defense Powered by BlocHack</p>
                                <p className="w-full h-2 border-b border-gray-800"></p>
                                <p className="mt-6 group-hover:text-primary group-hover:motion-safe:animate-bounce duration-1000 delay-100 transition ease-in-out">Learn More</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Container>
        </div>
    );
};
