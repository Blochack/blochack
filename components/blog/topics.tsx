import Link from "next/link";
import { Container } from "@/components/container";
import { BlogNav } from "@/components/blog/blogNav";
// import { Button } from "./ui/button";

export const Topics = () => {
    return (
        <div className="overflow-hidden pb-20 mb-60 sm:pb-32 lg:pb-32 xl:pb-36">
            <Container>
                <BlogNav />
                <div className="grid gap-4 grid-cols-3">
                    <div className="mt-8">
                        <div className="relative bg-[url('/images/blogImg1.png')] rounded-xl h-[266px]">
                            <p className="absolute right-4 top-4 bg-[rgba(39,42,50,0.6)] text-sm py-2 px-4 bg-transparent-100 rounded-full">Partnership</p>
                        </div>
                        <div>
                            <p className="text-xl w-4/5 py-4">Phishing Defense Powered by BlocHack</p>
                            <p className="w-full h-2 border-b border-gray-800"></p>
                            <p className="mt-6">Learn More</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="relative bg-[url('/images/blogImg2.png')] rounded-xl h-[266px]">
                            <p className="absolute right-4 top-4 bg-[rgba(39,42,50,0.6)] text-sm py-2 px-4 bg-transparent-100 rounded-full">Partnership</p>
                        </div>
                        <div>
                            <p className="text-xl w-4/5 py-4">Phishing Defense Powered by BlocHack</p>
                            <p className="w-full h-2 border-b border-gray-800"></p>
                            <p className="mt-6">Learn More</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="relative bg-[url('/images/blogImg3.png')] rounded-xl h-[266px]">
                            <p className="absolute right-4 top-4 bg-[rgba(39,42,50,0.6)] text-sm py-2 px-4 bg-transparent-100 rounded-full">Partnership</p>
                        </div>
                        <div>
                            <p className="text-xl w-4/5 py-4">Phishing Defense Powered by BlocHack</p>
                            <p className="w-full h-2 border-b border-gray-800"></p>
                            <p className="mt-6">Learn More</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="relative bg-[url('/images/blogImg1.png')] rounded-xl h-[266px]">
                            <p className="absolute right-4 top-4 bg-[rgba(39,42,50,0.6)] text-sm py-2 px-4 bg-transparent-100 rounded-full">Partnership</p>
                        </div>
                        <div>
                            <p className="text-xl w-4/5 py-4">Phishing Defense Powered by BlocHack</p>
                            <p className="w-full h-2 border-b border-gray-800"></p>
                            <p className="mt-6">Learn More</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="relative bg-[url('/images/blogImg2.png')] rounded-xl h-[266px]">
                            <p className="absolute right-4 top-4 bg-[rgba(39,42,50,0.6)] text-sm py-2 px-4 bg-transparent-100 rounded-full">Partnership</p>
                        </div>
                        <div>
                            <p className="text-xl w-4/5 py-4">Phishing Defense Powered by BlocHack</p>
                            <p className="w-full h-2 border-b border-gray-800"></p>
                            <p className="mt-6">Learn More</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="relative bg-[url('/images/blogImg3.png')] rounded-xl h-[266px]">
                            <p className="absolute right-4 top-4 bg-[rgba(39,42,50,0.6)] text-sm py-2 px-4 bg-transparent-100 rounded-full">Partnership</p>
                        </div>
                        <div>
                            <p className="text-xl w-4/5 py-4">Phishing Defense Powered by BlocHack</p>
                            <p className="w-full h-2 border-b border-gray-800"></p>
                            <p className="mt-6">Learn More</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="relative bg-[url('/images/blogImg1.png')] rounded-xl h-[266px]">
                            <p className="absolute right-4 top-4 bg-[rgba(39,42,50,0.6)] text-sm py-2 px-4 bg-transparent-100 rounded-full">Partnership</p>
                        </div>
                        <div>
                            <p className="text-xl w-4/5 py-4">Phishing Defense Powered by BlocHack</p>
                            <p className="w-full h-2 border-b border-gray-800"></p>
                            <p className="mt-6">Learn More</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="relative bg-[url('/images/blogImg2.png')] rounded-xl h-[266px]">
                            <p className="absolute right-4 top-4 bg-[rgba(39,42,50,0.6)] text-sm py-2 px-4 bg-transparent-100 rounded-full">Partnership</p>
                        </div>
                        <div>
                            <p className="text-xl w-4/5 py-4">Phishing Defense Powered by BlocHack</p>
                            <p className="w-full h-2 border-b border-gray-800"></p>
                            <p className="mt-6">Learn More</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="relative bg-[url('/images/blogImg3.png')] rounded-xl h-[266px]">
                            <p className="absolute right-4 top-4 bg-[rgba(39,42,50,0.6)] text-sm py-2 px-4 bg-transparent-100 rounded-full">Partnership</p>
                        </div>
                        <div>
                            <p className="text-xl w-4/5 py-4">Phishing Defense Powered by BlocHack</p>
                            <p className="w-full h-2 border-b border-gray-800"></p>
                            <p className="mt-6">Learn More</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
