'use client';
import { useOnClickOutside } from 'usehooks-ts'
import Link from 'next/link';
import Image from "next/image";
import React from "react"
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { useQuery } from "@apollo/client";
import { GET_INFO_BUTTON } from "../lib/gql/queries";

export function MyNavbar() {
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const [data, setData] = useState()
  const handleClickOutside = () => {
    setNavbar(false)
  }
  const handleClickInside = () => {
    setNavbar(!navbar)
  }
  
  useOnClickOutside(Navref, handleClickOutside)

return(
    <nav className="bg-black w-full z-10 shadow-2xl fixed inset-x-0 top-0 ">
    <div className="justify-between max-w-6xl mx-auto items-center md:flex">
      <div>
        <div className="flex items-center justify-between md:block">
          <Link href={"/"} legacyBehavior>
          <a>
          <div className="flex justify-center gap-10 grid-cols-2">
          <div className="a2imbuttonbox ml-2 w-10">
            <Image
              src="/logos/A2IM-logos/A2IM-button-white.png"
              alt="a2im logo button"
              width={100}
              height={100}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto"
              }} />
            </div>
            <h2 className="text-3xl text-white font-normal tracking-normal">INDIE<span className="text-white font-bold tracking-tighter">WEEK</span></h2>
          </div>
          </a>
          </Link>
          <div className="md:hidden">
            <button
              className="pr-2 mr-2 pl-2 text-white rounded-md outline-none focus:border-white focus:border"
              onClick={handleClickInside}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`flex-1 py-10 md:py-0 justify-center md:block ${
            navbar ? 'block' : 'hidden'
          }`}
        >
          <ul ref={Navref} id="iwnavbar" className="md:lvl1 text-xl relative mx-auto
              uppercase text-center
          md:flex">
            <li 
              className="
              mx-auto
              md:px-3 
              ">
              <Link href="/about" onClick={handleClickOutside}
              >
                <h2 className="my-3 md:my-0 text-xl hover:scale-105 md:text-white bg-white md:bg-transparent rounded-3xl text-black">Info</h2>
              </Link>
                <ul className="
                    mx-auto
                    md:lvl2
                    md:rounded-b-3xl
                    md:bg-black
                    md:-ml-6
                    md:px-3
                    md:pb-3
                    ">
                      <li className="
                          md:w-full
                          md:py-2
                          ">
                        <Link href="/about" onClick={handleClickOutside}>
                        <h2 className="my-3 md:my-0 text-xl hover:scale-105 md:text-white bg-white md:bg-transparent rounded-3xl text-black">ABOUT</h2>
                        </Link>
                      </li>
                      <li className="
                          md:w-full
                          md:py-2
                          ">
                        <Link href="/faq" onClick={handleClickOutside}>
                        <h2 className="my-3 md:my-0 text-xl hover:scale-105 md:text-white bg-white md:bg-transparent rounded-3xl text-black">FAQ</h2>
                        </Link>
                      </li>
                      </ul>
            </li>
            <li className="
            md:px-3 
            ">
              <Link href="/tickets" onClick={handleClickOutside}>
              <h2 className="my-3 md:my-0 text-xl hover:scale-105 md:text-white bg-white md:bg-transparent rounded-3xl text-black">Attend</h2>
              </Link>
              <ul className="
                    md:mx-auto
                    md:lvl2
                    md:rounded-b-3xl
                    md:bg-black
                    md:px-3
                    md:-ml-4
                    md:pb-3">
                      <li className="
                          md:w-full
                          md:py-2
                          ">
                        <Link href="/tickets#tickets" prefetch={false} passHref onClick={handleClickOutside} replace>
                        <h2 className="my-3 md:my-0 text-xl hover:scale-105 md:text-white bg-white md:bg-transparent rounded-3xl text-black">Tickets</h2>
                        </Link>
                      </li>
                      <li className="
                          md:w-full
                          md:py-2
                          ">
                        <Link href="/tickets#hotels" prefetch={false} passHref onClick={handleClickOutside} replace>
                        <h2 className="my-3 md:my-0 text-xl hover:scale-105 md:text-white bg-white md:bg-transparent rounded-3xl text-black">Hotels</h2>
                        </Link>
                      </li>
                      </ul>
            </li>
            <li 
              className="md:px-3">
              <Link href="/program" onClick={handleClickOutside}>
              <h2 className="my-3 md:my-0 text-xl hover:scale-105 md:text-white bg-white md:bg-transparent rounded-3xl text-black">Program</h2>
              </Link>
            </li>
            <li 
              className="md:px-3">
              <Link href="/sponsors" onClick={handleClickOutside}>
              <h2 className="my-3 md:my-0 text-xl hover:scale-105 md:text-white bg-white md:bg-transparent rounded-3xl text-black">Sponsors</h2>
              </Link>
            </li>
            <li
              className="text-center font-serif text-zinc-500 whitespace-nowrap hover:scale-105">
<p>Sign In</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export function MyModal (){
    const Modalref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false);
    const handleClickOutside = () => {
      setModalOpen(false)
    }
    const handleClickInside = () => {
      setModalOpen(true)
    }
    useOnClickOutside(Modalref, handleClickOutside)
    const dropIn = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 40,
                stiffness: 300,
            }
        },
        exit: {
            y:"-100vh",
            opacity: 0,
        },
    };

    return (
        <>
            <div className="z-10 flex fixed bottom-5 right-5 w-20 h-20 rounded-3xl bg-gradient-radial from-black via-transparent to-transparent">
            {isModalOpen ? (
                <motion.div
                ref={Modalref}
                onClick={(e) => e.stopPropagation()}
                className="fixed border-4 p-5 modalinfo w-96 shadow-2xl bottom-16 md:right-16 right-7"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                <ModalInfo/>
                </motion.div>
                 ) : (
                <button 
                onClick={handleClickInside}>
                <div className="w-20 h-20">
                <Image
                src="/logos/A2IM-logos/A2IM-button-white.png"
                alt="a2im button"
                width={75}
                height={75}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} />
                </div>
            </button>
                )}
            </div>
     </>
    );
    }
      
      function ModalInfo(){
        const { loading, error, data } = useQuery(GET_INFO_BUTTON, { 
            variables: {
              PublicationState: "LIVE", 
              Name: "Indie Week"
            }});
            if (loading) return <div className="animate-pulse h-[150px] w-[100px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
            if (error) return <p>Error</p>
        return (
            <div>
                {data?.infoButtons.data.map(info => (
                <div key={info.id} className="px-4 pb-4 justify-evenly rounded-xl">
                  <h3 className="text-2xl py-2 font-bold">INFORMATION</h3>
                    <ReactMarkdown className="line-break" remarkPlugins={[remarkGfm]}>{info.attributes.Info}</ReactMarkdown>
                    </div>
                                  )
                )}
            </div>
        )
    }

export default function MyUi(){
  return(
    <>
    <div className="relative">
    <MyModal/>
    <MyNavbar/>
    </div>
    </>
  )
}