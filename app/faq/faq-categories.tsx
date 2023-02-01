'use client';

import Link from 'next/link';
import { GET_ALL_FAQ } from "../../lib/gql/queries";
import { useQuery } from '@apollo/client';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';

  export default function GetFAQ({Category}) {

    const { loading, error, data } = useQuery(GET_ALL_FAQ, { 
      variables: {
        PublicationState: "LIVE",
        Name: "Indie Week",
        Category: Category,
      }});
      if (loading) return <div className="mx-auto animate-pulse h-[50px] w-[896px] bg-gray-200 dark:bg-gray-700 rounded-xl py-20 my-5"></div>
      if (error) return <p>Error</p>
    return (
<div id={Category} className="mt-20 rounded-3xl bg-black bg-opacity-50 border-4 border-white mx-auto max-w-4xl">
                      <div className="py-3">
                      <h3 className="font-bold text-center">{Category}</h3>
                      <hr className="mb-3 mt-2 border-iwred mx-10"></hr>
        <Accordion allowMultipleExpanded className="mx-10">
        {data?.faqItems.data.map(faqItems => (
                    <AccordionItem key={faqItems.id}  className="bg-white text-black text-center mx-auto rounded-3xl relative my-8" activeClassName="bg-black bg-opacity-50 border-4 text-center mx-auto rounded-3xl relative my-8">
                <AccordionItemHeading className="relative mx-auto text-3xl py-2">
                    <AccordionItemButton  >
                      {faqItems.attributes.Question}
                    </AccordionItemButton>                
                  </AccordionItemHeading>
                <AccordionItemPanel className="mx-auto  text-white rounded-b-3xl p-8">
                <hr className="mx-1 mb-3 -mt-4 border-iwred"></hr>
                    <h4>
                <ReactMarkdown className="line-break" remarkPlugins={[remarkGfm]}>
                    {faqItems.attributes.Answer}
                    </ReactMarkdown>
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
              )
            )}
            </Accordion>
        </div>
        </div>
    );
}

export const FAQCategories = [
    {id: 1, title:"GENERAL"},
    {id: 2, title:"TICKETING"},
    {id: 3, title:"ACCOMMODATIONS"},
    {id: 4, title:"ACCESSIBILITY"},
    {id: 5, title:"PRESS"},
]

export function JumpTo() {
    return (
        <div className="mt-10 rounded-3xl bg-black bg-opacity-75 border-4 border-white mx-auto max-w-xl">
            <h3 className="font-bold text-center">FAQ</h3>
            <hr className="border-iwred my-5 mx-10"></hr>
        <div className='flex flex-wrap mt-10 gap-5 mb-8 text-center justify-evenly'>
        {FAQCategories.map(Category => (
          <button key={Category.id} className="hover:scale-105 rounded-full bg-white text-black px-6">
<Link href={`/faq#${Category.title}`} prefetch={false} passHref replace legacyBehavior>
                <h3 className="align-middle text-xl font-normal px-4 py-2 text-black truncate tracking-tighter leading-tight">
                {Category.title}
                </h3>
            </Link>
          </button>
        ))}
          </div>
          </div>
    );
}