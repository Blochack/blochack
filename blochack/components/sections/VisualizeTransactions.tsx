import Link from "next/link";
import { Container } from "@/components/container";
import { TransactionsIllustration } from "@/components/trans";
import { Button } from "@/components/ui/button";
import { VerifyIllustration } from "../illustrations/veri";
import { VisualizeIllustration } from "../illustrations/visualizeillustration";

export const VisualizeTransactions = () => {
    return (
        <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
            <Container>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20 ">

                    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-6 lg:max-w-none lg:pt-6 xl:col-span-6">
                        <h1 className="text-4xl font-bold text-balance tracking-tight ">
                            Visualize Transactions
                        </h1>

                        <div className="mt-6 flex flex-col gap-4">

                        {
                            [
                                {
                                    id: 1,
                                    first: "Real-Time Decision-Making with Visual Trace",
                                    second: "Real-time nature of visual transaction tracing in BlocHack ensures that users have up-to-the-minute insights into their "
                                },
                                {
                                    id: 2,
                                    first: "Proactive Security with Real-Time Alerts",
                                    second: "Real-time nature of visual transaction tracing in BlocHack ensures that users have up-to-the-minute insights into their "
                                },
                                {
                                    id: 3,
                                    first: "Real-Time Decision-Making with Visual Trace",
                                    second: "Real-time nature of visual transaction tracing in BlocHack ensures that users have up-to-the-minute insights into their "
                                },
                            ].map((e, i) => {
                                return (
                                    <div key={e.id} className="pr-8 py-4 space-y-2 border-b border-zinc-800">
                                        <h1 className="text-lg font-semibold self-stretch text-balance">{e.first}</h1>
                                        <p className="text-normal text-sm font-light self-stretch text-slate-300 text-balance h-16">{e.second}</p>
                                    </div>
                                );
                            })
                        }
                        </div>

                    </div>


                    <div className="relative mt-10 sm:mt-20 lg:col-span-6 lg:row-span-2 lg:mt-0 xl:col-span-6">
                        <VisualizeIllustration className="w-full" />
                    </div>
                </div>


            </Container>
        </div>
    );
};