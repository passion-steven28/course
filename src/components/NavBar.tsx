'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
    {
        id: 1,
        link: '/',
        text: 'Home'
    },
    {
        id: 2,
        link: '/about',
        text: 'About'
    },
    {
        id: 3,
        link: '/contact',
        text: 'Contact'
    }
]

const NavBar = () => {
    const pathname = usePathname()

    return (
        <nav className='flex items-center justify-evenly w-full py-2'>
            <div>
                <h1 className='text-2xl font-bold'>
                    course
                </h1>
            </div>
            <div className='flex items-center gap-4'>
                {navLinks.map((link) => {
                    return <Link
                        key={link.id}
                        href={link.link}
                        className={pathname === link.link ? 'underline text-xl' : 'text-black text-xl hover:underline'}
                    >
                        {link.text}
                    </Link>
                })}
            </div>
        </nav>
    )
}

export default NavBar
