import Link from "next/link";
import { Container } from "@/components/container";

export const BlogPageHero = () => {
    return (
        <div className="overflow-hidden">
            <Container>
                <div className="bg-[url('/images/blogjumbo.png')] bg-no-repeat bg-bottom h-[65vh] py-44 relative">
                   <div className="absolute bottom-0 w-full px-14 pt-14 pb-5">
                        <h1 className="text-[52px] leading-tight tracking-tight pt-auto w-6/12">
                        Phishing Defense Powered by BlocHack
                        </h1>
                        <div className="flex flex-row justify-between w-full mt-3">
                            <div className="flex flex-row justify-start">
                                <img className="flex-1" src="/images/bloguseravatar.png" alt="" />
                                <div className="ml-2 flex-auto">
                                    <p className="text-[#787D82] text-[10px]">AUTHOR</p>
                                    <p className="text-[#787D82] text-base">George Oluwasegun</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[#787D82] text-base">November 2, 2023</p>
                            </div>
                        </div>
                   </div>
                </div>
            </Container>
        </div>
    );
};
