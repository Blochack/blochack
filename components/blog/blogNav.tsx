import { Container } from "@/components/container";


export const BlogNav = () => {
    return (
        <div className="flex flex-row md:gap-5 sm:gap-4 pl-0 ml-0 justify-start sm:mt-10">
            <p className="text-xs bg-[rgba(39,42,50,0.4)] bg-[#E84142] hover:bg-[#E84142] cursor-pointer px-4 py-2 rounded-2xl">All</p>
            <p className="text-xs bg-[rgba(39,42,50,0.4)] hover:bg-[#E84142] cursor-pointer px-4 py-2 rounded-2xl">Partnership</p>
            <p className="text-xs bg-[rgba(39,42,50,0.4)] hover:bg-[#E84142] cursor-pointer px-4 py-2 rounded-2xl">Tips & Tricks</p>
            <p className="text-xs bg-[rgba(39,42,50,0.4)] hover:bg-[#E84142] cursor-pointer px-4 py-2 rounded-2xl">Reports</p>
        </div>
    );
};