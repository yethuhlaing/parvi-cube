import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion"
import { faq } from "../lib/data"

export function FAQ() {
    return (
        <div className="flex flex-col justify-around lg:px-28 px-10 lg:py-10">
            <div className="w-full flex flex-col justify-center items-center mb-15">
                <h1 className='text-5xl font-black md:text-8xl uppercase mb-4'>FAQ</h1>
                <h2 className="text-lg md:text-xl text-center">Got questions? If you cannot find an answer here, contact us at <a href="mailto:parvicube@gmail.com" className="bg-gradient-to-r from-[#050deb] to-[#ff00e2] text-transparent bg-clip-text">parvicube@gmail.com</a></h2>
            </div>
            <Accordion type="single" collapsible className="w-full pt-4">
                {faq.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                        <AccordionTrigger className='text-md lg:text-xl font-semibold'>{item.question}</AccordionTrigger>
                        <AccordionContent className='text-base lg:text-lg font-semibold'>{item.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
// parvicube@lutes