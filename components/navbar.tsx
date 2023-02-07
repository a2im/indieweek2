'use client';
import { useOnClickOutside } from 'usehooks-ts'
import Link from 'next/link';
import { useState, useRef} from 'react';
import Image from "next/image";
import Login from '../app/sign-in/login';


export default function MyNavbar() {
  const ref = useRef();
  const [navbar, setNavbar] = useState(false);
  const handleClickOutside = () => {
    setNavbar(false)
    console.log('clicked outside')
  }

  const handleClickInside = () => {
    setNavbar(!navbar)
    console.log('clicked inside')
  }

  useOnClickOutside(ref, handleClickOutside)
  return (
      <nav className="bg-black w-full fixed z-50 shadow-2xl">
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
              <ul ref={ref} id="iwnavbar" className="md:lvl1 text-xl relative mx-auto
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
                  <Login/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}
