import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Faq({faq, index}) {
  return (
    <>
        <AccordionItem value={`item-${index}`} className="bg-white md:px-5 px-3 md:py-1 rounded-md cursor-pointer faq-bg">
            <AccordionTrigger className="lg:text-xl text-xs">{faq.question}</AccordionTrigger>
            <AccordionContent className="lg:text-sm text-xs">
                {faq.answer}
            </AccordionContent>
        </AccordionItem>
    </>
  )
}

export default Faq