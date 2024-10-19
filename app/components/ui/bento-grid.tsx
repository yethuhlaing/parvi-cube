import { cn } from "@/app/lib/utils";
import { memories } from "@/app/lib/data"
import Image, { StaticImageData } from "next/image";

type extracurricularProp = (typeof memories)[number]
export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    header,
}: extracurricularProp) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento shadow-input dark:shadow-none bg-black border-white/[0.2]  border  justify-between flex flex-col space-y-4",
                className
            )}
        >
            <Image src={header} alt="extracurricular" className="flex flex-1 w-full h-full object-cover min-h-[6rem] rounded-xl" />
        </div>
    );
};