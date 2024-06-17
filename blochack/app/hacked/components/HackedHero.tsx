import { Container } from "@/components/container";
import reportData from "@/components/sections/ReportData";
import { VectorTwo, VectorTwoDesk } from "@/components/svg";
import { cn } from "@/lib/utils";
import { Key } from "lucide-react";

export const Hackedhero = ({
  className,
  props,
}: {
  className?: string;
  props?: any;
}) => {
  const address = "0xDB65....3D7c";

  return (
    <Container className={cn("", className)}>
      <div className="outline-primary bg-[#121212] p-5 md:p-12 rounded-t-2xl md:flex">
        <div className="md:w-3/6">
          <h1 className="text-white text-sm md:text-xl border py-1 px-3 border-[#E84142] rounded-full">
            <span className="text-[#E84142] me-1">{address}</span> Hacks linked
            to address:
          </h1>
        </div>

        {/* Both tree and Linking Tree */}

        <div className="flex ">
          {/* Liking tree */}
          <div>
            <VectorTwo className="-mt-80 md:hidden" />
            <VectorTwoDesk className="hidden md:block mt-4" />
          </div>

          {/* Linked to text */}
          <div className="">
            {reportData.map((item, index) => (
              <div
                key={index}
                className="p-4 h-[246px] md:h-[133px] border mt-5 border-[#282828] rounded-xl md:flex"
              >
                <div className="md:w-1/2">
                  <div className="flex justify-between">
                    <h1 className="font-bold text-lg ">{item.title}</h1>
                    <p className="font-semibold text-base">
                      <a
                        href={item.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source
                      </a>
                    </p>
                  </div>
                  <h1 className="text-sm my-4 text-slate-50/60">
                    {item.description}
                  </h1>
                </div>
                <div>
                  <hr className="border-t border-[#282828] md:w-20 transform md:rotate-90 md:mt-10 md:-ms-2" />
                </div>
                <div className="mt-2 md:mt-0 md:w-1/3">
                  <h1 className="font-semibold text-base mt-1"> Fund Lost</h1>
                  <h1 className="text-center border m-auto py-2 mt-2 md:mt-4 border-[#282828] rounded-xl">
                    {item.fundLost}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
