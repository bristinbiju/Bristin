"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function ProjectNavigation() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex gap-4 mt-20 justify-center w-full">
            {/* Back to Work Button */}
            <Link href="/#work">
                <motion.button
                    initial={{ opacity: 0.5, y: 20 }}
                    whileInView={{ opacity: 0.5, y: 0 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white font-medium backdrop-blur-md"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Work
                </motion.button>
            </Link>

            {/* Go to Top Button */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0.5, y: 20 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white font-medium backdrop-blur-md"
            >
                Go to Top
                <ArrowUp className="w-5 h-5" />
            </motion.button>
        </div>
    );
}
