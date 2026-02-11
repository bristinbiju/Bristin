"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative z-10 w-full max-w-6xl flex flex-col items-start justify-center min-h-screen px-4 md:px-0 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
            >
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                        DESIGNING FOR THE
                    </span>
                    <br />
                    <motion.span
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-500"
                    >
                        GLOBAL STAGE.
                    </motion.span>
                    <br />
                    <span className="text-white text-4xl md:text-7xl">FOCUSED ON IMPACT.</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
                    I’m Bristin Biju, a Multidisciplinary Graphic Designer & Brand Strategist bridging the gap between creative vision and market performance.
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 mt-8"
                >
                    <button className="group px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center gap-2">
                        View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm text-white">
                        Contact Me
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
