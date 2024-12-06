'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import { smoothScroll } from '../utils/smoothScroll'

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Book Services', href: '#book' },
    { name: 'About Us', href: '#about' },
]

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 }
        )

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-indigo-600">Relaxing Touch</span>
                    </div>
                    <MobileMenu />
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => smoothScroll(e, item.href.slice(1))}
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === item.href.slice(1)
                                            ? 'text-indigo-600 bg-indigo-50'
                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                                        } transition-colors duration-300`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

