'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";

export default function MyNavbar({signOut}) {
  const ref = useRef();
  const [navbar, setNavbar] = useState(false);
  useOnClickOutside(ref, () => setNavbar(false));
  return (
      <nav className="bg-black w-full fixed z-50">
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
                <div className="mt-1">
                <h2 className="text-3xl text-white font-normal tracking-normal">INDIE<span className="text-white font-bold tracking-tighter">WEEK</span></h2>
                </div>
              </div>
              </a>
              </Link>
              <div className="md:hidden">
                <button
                  className="pr-2 mr-2 pl-2 text-white rounded-md outline-none focus:border-white focus:border"
                  onClick={() => setNavbar(!navbar)}
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
              className={`flex-1 justify-center md:block ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="md:lvl1 text-xl relative
                  uppercase text-center
              md:flex z-50">
                <li 
                  className="
                  px-3 
                  hover:scale-105
                  z-50
                  ">
                  <Link href="/about" onClick={() => setNavbar(false)} 
                  className="
                  ">
                  Info
                  </Link>
                    <ul className="
                        mx-auto
                        md:lvl2
                        rounded-b-3xl
                        md:-ml-6
                        px-3
                        pb-3
                        bg-iwred
                        z-40
                        ">
                          <li className="
                              w-full
                              py-2
                              hover:scale-105
                              ">
                            <Link href="/about" onClick={() => setNavbar(false)}>
                              ABOUT
                            </Link>
                          </li>
                          <li className="
                              w-full
                              py-2
                              hover:scale-105
                              ">
                            <Link href="/faq" onClick={() => setNavbar(false)}>
                              FAQ
                            </Link>
                          </li>
                          </ul>
                </li>
                <li className="
                px-3 
                hover:scale-105
                ">
                  <Link href="/tickets" onClick={() => setNavbar(false)}>
                    Attend
                  </Link>
                  <ul className="
                        mx-auto
                        md:lvl2 
                        bg-iwred 
                        rounded-b-3xl
                        px-3
                        md:-ml-4
                        pb-3">
                          <li className="
                              w-full
                              py-2
                              hover:scale-105
                              ">
                            <Link href="/tickets#tickets" prefetch={false} passHref onClick={() => setNavbar(false)} replace>
                              Tickets
                            </Link>
                          </li>
                          <li className="
                              w-full
                              py-2
                              hover:scale-105
                              ">
                            <Link href="/tickets#hotels" prefetch={false} passHref onClick={() => setNavbar(false)} replace>
                              Hotels
                            </Link>
                          </li>
                          </ul>
                </li>
                <li 
                  className="px-3 hover:scale-105">
                  <Link href="/program" onClick={() => setNavbar(false)}>
                    Program
                  </Link>
                </li>
                <li 
                  className="px-3 hover:scale-105">
                  <Link href="/sponsors" onClick={() => setNavbar(false)}>
                    Sponsors
                  </Link>
                </li>
                <li className="px-3 hover:scale-105">
                  <button onClick={signOut}>Sign out</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}