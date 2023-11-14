"use client";
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
export default function NavbarItem({title, param}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
  return (
    <div>
        <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
            genre &&
            genre === param &&
            "underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg"
          }`}
         href={`/?genre=${param}`}>
            {title}
        </Link>
    </div>
  )
}
