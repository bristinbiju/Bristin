"use client";

import { motion } from "framer-motion";

interface LiquidGlassIconProps {
    name: string;
    delay?: number;
}

export default function LiquidGlassIcon({ name, delay = 0 }: LiquidGlassIconProps) {
    // Generate a unique ID for the filter to avoid conflicts if we had different filters, 
    // but for the same effect a shared ID is fine. 
    // However, let's use a shared ID "liquid-goo-icon" for this component type.
    const filterId = "liquid-goo-icon";

    return (
        <div className="relative group">
            <div
                className="relative w-24 h-24 flex items-center justify-center"
                style={{ filter: `url(#${filterId})` }}
            >
                {/* Main Glass Bubble */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay, duration: 0.5, type: "spring" }}
                    className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-colors"
                />

                {/* Floating "Liquid" Blob inside */}
                <motion.div
                    animate={{
                        x: [0, 10, -10, 0],
                        y: [0, -10, 10, 0],
                        scale: [1, 1.1, 0.9, 1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: delay
                    }}
                    className="absolute w-16 h-16 bg-purple-500/30 rounded-full blur-sm"
                />

                {/* Second Blob for more complexity */}
                <motion.div
                    animate={{
                        x: [0, -15, 5, 0],
                        y: [0, 10, -5, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: delay + 1
                    }}
                    className="absolute w-12 h-12 bg-blue-500/30 rounded-full blur-md"
                />

                {/* Text Content (Placed relative to be affected by filter? 
           Refinement: Text should usually NOT be goo-ified as it becomes unreadable.
           So text should be OUTSIDE the container with the filter, or Z-indexed above it?
           Actually, the filter is on the parent div.
           Let's move text OUTSIDE the filtered div, or put the filter on a specific wrapper for the blobs.
        */}
            </div>

            {/* Content Layer (Unfiltered) */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <span className="text-xs font-bold text-white tracking-widest uppercase drop-shadow-md">
                    {name}
                </span>
            </div>

            {/* SVG Filter Definition (Rendered once per instance? No, ideally once globally. 
         But typically React handles ID deduplication poorly if we don't manage it.
         Since it's a fixed ID, multiple renders are fine as long as they are identical.
      */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id={filterId}>
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
