import Link from "next/link";
import { Container } from "./container";
import { TransactionsIllustration } from "./trans";
import { Button } from "./ui/button";

export const Hero = () => {
    return (
        <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
            <Container>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">

                    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-6 lg:max-w-none lg:pt-6 xl:col-span-6">
                        <h1 className="text-6xl font-bold text-balance tracking-tight ">
                            Detect <span className="text-primary">Hacks</span>, <br /> <span className="text-primary">Trace</span> Transaction, <br />
                            Alerts in <span className="text-primary">Real-Time</span>
                        </h1>
                        <p className="mt-6 text-lg  text-gray-600 text-balance">
                            Trace the flow of funds across multiple chains with ease, with clear, visual insights of your wallet transactions.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                <Button

                                    variant="outline"
                                    className="text-primary border-primary"
                                >

                                    <span className="ml-2.5">Launch Dapp</span>
                                </Button>
                            </Link>
                        </div>
                    </div>


                    <div className="relative mt-10 sm:mt-20 lg:col-span-6 lg:row-span-2 lg:mt-0 xl:col-span-6">
                        <TransactionsIllustration className="w-full" />
                    </div>
                </div>


            </Container>
        </div>
    );
};