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
        <AccordionItem value={`item-${index}`} className="bg-white px-5 py-1 rounded-md cursor-pointer faq-bg">
            <AccordionTrigger className="text-xl">{faq.question}</AccordionTrigger>
            <AccordionContent>
                {faq.answer}
            </AccordionContent>
        </AccordionItem>
    </>
  )
}

export default Faq