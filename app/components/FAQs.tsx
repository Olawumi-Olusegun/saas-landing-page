"use client";

import React, { FC, useState } from 'react';
import PlusIcon from "./../assets/icons/plus-icon.svg"
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
interface Faq {
    id: number;
    question: string;
    answer: string;
}

interface AccordionItem {
    faq: Faq;
    isOpen: boolean | null;
    onClickAccordion: () => void;
}


const faqs: Faq[] = [
    {
        id: 1,
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, Paypal, and various other payment method depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
    },
    {
        id: 2,
        question: "How does the pricing work for teams?",
        answer: "Our pricing is per user per month. This means you only pay for the number of team you have on ypur account. Discounts are available for larger team and annual subscriptions.",
    },
    {
        id: 3,
        question: "Can I manage my plan later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Chnages to your plan will be prorated and reflected in your next billing cycle.",
    },
    {
        id: 4,
        question: "Is my data secure?",
        answer: "Security is our priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored and securely and accessed only by authorized users.",
    },
];


const AccordionItem: FC<AccordionItem> = ({faq, onClickAccordion, isOpen}) => {

    return (
        <div className="border-b border-white/30 w-full">
            <button onClick={onClickAccordion} type='button' className="w-full py-5 px-2 flex cursor-pointer items-center justify-between">
                <span className='text-start flex-1 text-lg font-bold'>{faq.question}</span>
              {isOpen 
              ? <div className="w-5 h-[2.7px] rounded-full bg-white"></div> 
              : <Image src={PlusIcon} alt='plus-icon' /> }  
            </button>
            <AnimatePresence>
            {
                isOpen && (
                    <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    >
                        {faq.answer}
                    </motion.div>
                )
            }
            </AnimatePresence>
        </div>
    )
}


const FAQs = () => {

    const [isOpen, setIsOpen] = useState<number | null>(null);

    const handleOnOpen = (index: number) => {
        setIsOpen((prevState) => (prevState === index ? null : index))
    }

  return (
    <div className='bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5d2ca8] to-black '>
        <div className="container mx-auto lg:max-w-[675px] px-4">
        <h2 className='text-center font-bold text-4xl sm:text-5xl'>Frequently asked questions</h2>
            <div className="mt-12">
                {
                    faqs.map((faq: Faq, index) => (
                        <AccordionItem
                        key={faq.id}
                        faq={faq}
                        isOpen={isOpen === index + 1}
                        onClickAccordion={() => handleOnOpen(index+1)}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default FAQs