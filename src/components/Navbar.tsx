"use client"

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                scrolled ? "bg-black/50 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent py-4 md:py-6"
            )}
        >
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white uppercase relative group z-50">
                Br
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                <Link href="#" className="hover:text-white transition-colors">Home</Link>
                <Link href="#work" className="hover:text-white transition-colors">Work</Link>
                <Link href="#about" className="hover:text-white transition-colors">About</Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <Link href="#contact" className="px-6 py-2 rounded-full border border-white/20 text-xs font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                    Let's Talk
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden z-50 p-2 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <motion.span
                        animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-full h-0.5 bg-white block origin-center"
                    />
                    <motion.span
                        animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-full h-0.5 bg-white block"
                    />
                    <motion.span
                        animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-full h-0.5 bg-white block origin-center"
                    />
                </div>
            </button>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/80 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 text-2xl font-light tracking-wider uppercase text-white/80">
                            {['Home', 'Work', 'About', 'Contact'].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={item === 'Home' ? '#' : item === 'Contact' ? '#contact' : `#${item.toLowerCase()}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="hover:text-white hover:scale-110 transition-all duration-300"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
