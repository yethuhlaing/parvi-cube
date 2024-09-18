import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion"

const accordionData = [
    {
        value: "item-1",
        trigger: "What is the Parvi Cube Event?",
        content: "The Parvi Cube Event is a problem-solving hackathon held at LUT University. It brings together tech and business minds to tackle real-world challenges across various industries.",
    },
    {
        value: "item-2",
        trigger: "Who can participate?",
        content: "The event is open to individuals from any technology or business background. Whether you're a student, professional, or enthusiast, your skills are valuable to the challenge.",
    },
    {
        value: "item-3",
        trigger: "What is the prize pool?",
        content: "The event offers a prize pool of €100, distributed to the winning teams based on their innovative solutions and problem-solving capabilities.",
    },
    {
        value: "item-4",
        trigger: "When and where is the event held?",
        content: "The Parvi Cube Event will take place at the Parvi building, LUT University, on November 8-10. It's a 2-day event, with 8 hours of hacking on the first day and presentations on the second day.",
    },
    {
        value: "item-5",
        trigger: "What types of problems will be solved?",
        content: "Participants will work on real-world challenges, spanning industries such as energy, sustainability, digital transformation, and business optimization. You can bring any tech stack or business model expertise.",
    },
    {
        value: "item-6",
        trigger: "How can I register?",
        content: "You can register online by filling out the event registration form. Stay tuned for the official announcement and link for registration on the Parvi Cube Event page!",
    },
];
export function FAQ() {
    return (
        <div className="flex flex-col md:flex-row justify-between lg:px-28">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start mb-15">
                <h1 className='text-4xl font-black md:text-6xl uppercase mb-4'>FAQ</h1>
                <h2 className="text-xl ">Got questions? If you can't find an answer here, contact us at <a href="mailto:team@parvicube.com" className="text-blue-500 underline">team@parvicube.com</a></h2>
            </div>
            <Accordion type="single" collapsible className="w-full my-10 lg:my-20 lg:px-28">
                {accordionData.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger className='text-lg lg:text-2xl font-semibold'>{item.trigger}</AccordionTrigger>
                        <AccordionContent className='text-base lg:text-lg font-semibold'>{item.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
