import React from "react";
import Link from "next/link";

export default function IWButton ({ children, href, type }) {
  if (type === 'external')
  return <div className="mx-auto text-center">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer">
          <div className="drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
              <button className="hover:scale-105 rounded-full bg-white text-black px-6">
                <h4 className="align-middle grow p-2 shrink font-normal leading-tight whitespace-nowrap uppercase">
                {children}
                </h4>
              </button>
          </div>

        </Link>
    </div>

  else if (type === 'internal')
  return <div className="mx-auto text-center">
  <Link href={href}>
  <div className="drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
      <button className="hover:scale-105 rounded-full bg-white text-black px-6">
        <h4 className="align-middle grow p-2 shrink font-normal leading-tight whitespace-nowrap uppercase">
        {children}
        </h4>
      </button>
  </div>
  </Link>
  </div>

  else if (type === 'anchor')
  return <div className="mx-auto text-center">
  <Link href={href} prefetch={false} replace passHref>
  <div className="drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
      <button className="hover:scale-105 rounded-full bg-white text-black px-6">
        <h4 className="align-middle p-2 shrink font-normal leading-tight whitespace-nowrap uppercase">
        {children}
        </h4>
      </button>
  </div>
  </Link>
</div>
}