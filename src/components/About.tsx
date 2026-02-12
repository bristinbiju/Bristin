"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react";
import Image from "next/image";


const tools = [
    "Photoshop", "Illustrator", "InDesign", "Premiere Pro",
    "After Effects", "Lightroom", "Adobe Firefly", "Figma", "Framer"
];

const socialLinks = [
    { icon: Mail, url: "mailto:bristinbiju123@gmail.com" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/bristin-biju-832a4a1a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { icon: Instagram, url: "https://www.instagram.com/bristinbiju/" },
    // Behance icon is not in Lucide by default usually (or maybe it is? It might be 'Monitor' or 'Globe' as placeholder if not).
    // I'll check if I can use a generic 'Link' or 'Globe' for Behance if specific icon missing.
];

export default function About() {
    return (
        <section className="relative z-10 w-full max-w-7xl px-4 md:px-0 mx-auto py-32 flex flex-col md:flex-row gap-16 items-center" id="about">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
            >
                <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                    About Me
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                    <p>
                        I’m <strong className="text-white">Bristin Biju</strong>, a Multidisciplinary Graphic Designer & Brand Strategist with 4+ years of experience. Currently based in the UAE, I specialize in bridging the gap between creative vision and market performance.
                    </p>
                    <p>
                        My background spans 2 years in fast-paced agencies handling diverse clients across Dubai, Europe, and Africa. I don't just design; I obsess over typography, layout, and the 'why' behind every pixel.
                    </p>
                    <p>
                        From high-stakes print campaigns for major events like <strong className="text-white">AIM Congress 2025</strong> to digital branding that converts, I blend Adobe Creative Suite mastery with AI-driven workflows to deliver speed without sacrificing soul.
                    </p>
                </div>

                {/* Tools Section */}
                {/* Tools Section */}
                {/* Tools Section */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Mastered Tools</h3>
                    <div className="flex flex-wrap gap-3">
                        {tools.map((tool, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default"
                            >
                                {tool}
                            </motion.span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                    <p className="text-gray-400 text-sm">Let’s Connect</p>
                    <div className="flex gap-4">
                        {/* Custom Behance Button since Icon might be missing */}
                        <a href="https://www.behance.net/bristinbiju" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md group text-gray-300 hover:text-white">
                            <span className="font-bold text-xs">Be</span>
                        </a>

                        <a href="https://www.instagram.com/bristinbiju/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md group text-gray-300 hover:text-white">
                            <Instagram className="w-5 h-5" />
                        </a>

                        <a href="mailto:bristinbiju123@gmail.com" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md group text-gray-300 hover:text-white">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                    <p className="text-white font-mono mt-2">+91 8590894407</p>
                </div>
            </motion.div>

            {/* Visual Element (kept from before or modified) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-1 relative w-full flex justify-center"
            >
                <div className="relative w-full aspect-square max-w-[500px] rounded-3xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 backdrop-blur-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-blue-500/5 animate-pulse"></div>
                    <Image
                        src="/bristin.png"
                        alt="Bristin Biju"
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay md:mix-blend-normal"
                    />

                    {/* Floating Elements decoration */}
                    <motion.div
                        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
                    />
                    <motion.div
                        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"
                    />
                </div>
            </motion.div>
        </section>
    );
}
