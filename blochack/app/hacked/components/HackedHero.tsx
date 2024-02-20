import { Container } from "@/components/container";
import { cn } from "@/lib/utils";


export const Hackedhero = ({className, props}: {className?: string, props?: any}) => {
    return (
        <Container className={cn("", className )} >
            <div className="outline-primary bg-">
                <h1 className="text-white ">The hacked address will be here</h1>
            </div>
        </Container>
    );
};