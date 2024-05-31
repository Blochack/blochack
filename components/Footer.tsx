import { FooterFoot } from "./FooterFoot";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Footer = () => {
    return (
        <div className="bg-primary flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="text-center gap-4 max-w-md space-y-4 mb-24">

                <h1 className="text-4xl font-bold ">Information is Safety</h1>
                <p className="text-balance">Protect yourself, get the information about the latest hack and safeguard yourself</p>
                    <Input
                        className="bg-primary rounded-3xl placeholder:text-primary-foreground text-primary-foreground"
                        placeholder="Your email address"
                    />
                    <Button variant="secondary" className="w-full text-primary">Subscribe</Button>

            </div>
            <FooterFoot />
        </div>
    );
};