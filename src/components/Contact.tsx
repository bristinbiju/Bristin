"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Instagram, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section className="relative z-10 w-full max-w-4xl px-4 mx-auto py-20" id="contact">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-12 text-center group"
            >
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[500px] bg-purple-600/20 blur-[100px] -z-10 rounded-full pointer-events-none" />

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Together</span>
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">
                    Ready to elevate your brand? Drop me a line or schedule a call. I'm always open to discussing new projects and creative ideas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {/* Email Card */}
                    <a href="mailto:bristinbiju123@gmail.com" className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all group/card">
                        <div className="p-4 rounded-full bg-purple-500/10 text-purple-400 mb-4 group-hover/card:bg-purple-500 group-hover/card:text-white transition-colors">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-white font-semibold mb-1">Email Me</h3>
                        <p className="text-gray-400 text-sm">bristinbiju123@gmail.com</p>
                    </a>

                    {/* Phone Card */}
                    <a href="tel:+918590894407" className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all group/card">
                        <div className="p-4 rounded-full bg-blue-500/10 text-blue-400 mb-4 group-hover/card:bg-blue-500 group-hover/card:text-white transition-colors">
                            <Phone className="w-8 h-8" />
                        </div>
                        <h3 className="text-white font-semibold mb-1">Call Me</h3>
                        <p className="text-gray-400 text-sm">+91 8590894407</p>
                    </a>
                </div>

                <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-5 h-5 text-purple-500" />
                        <span>Based in UAE</span>
                    </div>

                    <div className="h-px w-12 bg-white/20 hidden md:block" />

                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/bristin-biju-832a4a1a6/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/bristinbiju/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="https://www.behance.net/bristinbiju" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all font-bold text-sm flex items-center h-6">
                            Be
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
