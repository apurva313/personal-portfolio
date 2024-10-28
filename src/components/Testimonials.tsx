import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import { reviews } from "@/data/reviews";
import Image from "next/image";

const ReviewCard = ({
    img,
    name,
    designation,
    body,
}: {
    img: string;
    name: string;
    designation: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] backdrop-blur dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{designation}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};


export default function Testimonials() {
    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);
    return (
        <div className="relative flex w-full flex-col sm:mt-12 mt-8 items-center justify-center overflow-hidden">
            {/* Heading Text */}
            <div className="text-center">
                <h1 className="text-3xl font-semibold">Testimonials</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dolor!</h1>
            </div>

            {/* Cards */}
            <div className="mt-6">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.designation} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.designation} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </div>
    )
}