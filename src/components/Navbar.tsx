"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import LiquidSwitch from './LiquidSwitch'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
                scrolled ? "bg-black/50 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent py-6"
            )}
        >
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white uppercase relative group">
                Br
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
            </Link>

            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                <Link href="#" className="hover:text-white transition-colors">Home</Link>
                <Link href="#work" className="hover:text-white transition-colors">Work</Link>
                <Link href="#about" className="hover:text-white transition-colors">About</Link>
            </div>

            <div className="flex items-center gap-4">
                <LiquidSwitch />
                <button className="px-6 py-2 rounded-full border border-white/20 text-xs font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                    Let's Talk
                </button>
            </div>
        </motion.nav>
    )
}
