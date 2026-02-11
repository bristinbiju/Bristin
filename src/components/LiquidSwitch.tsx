"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LiquidSwitch() {
    const [isOn, setIsOn] = useState(false);

    return (
        <div className="relative inline-block">
            {/* The visible switch container */}
            <div
                className="relative w-16 h-8 cursor-pointer"
                onClick={() => setIsOn(!isOn)}
                // The filter is applied here to blend the children (background and handle)
                style={{ filter: "url(#liquid-goo)" }}
            >
                {/* Switch Background Pill */}
                <motion.div
                    className={`absolute inset-0 rounded-full transition-colors duration-500 ${isOn ? "bg-purple-500" : "bg-gray-600"}`}
                />

                {/* The Sliding Circle Handle */}
                <motion.div
                    className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md z-10"
                    animate={{ x: isOn ? 32 : 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        mass: 1 // Adding mass makes it feel a bit heavier/liquid
                    }}
                />

                {/* Optional: Trail particles for more liquid feeling (advanced), sticking to basic goo for now */}
            </div>

            {/* SVG Filter Definition - Hidden */}
            <svg className="hidden">
                <defs>
                    <filter id="liquid-goo">
                        {/* 1. Blur the inputs */}
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                        {/* 2. Contrast to sharpen the blur into a shape */}
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        {/* 3. Composite with original to keep colors if needed, but for simpler shapes mostly feColorMatrix is enough. 
                However, to handle different colors (bg vs handle), we need to be careful.
                The simple goo filter often messes up multi-color blends unless we strictly use alpha.
                Let's try a simpler approach where we just blur the alpha channel if possible, 
                BUT for different colored elements (purple bg, white handle), simple goo might bleed colors ugly.
            */}
                    </filter>
                </defs>
            </svg>

            {/* 
         Alternative Strategy for Colors: 
         The above goo filter blends colors. Purple + White blurred = Light Purple smudge.
         Then the logic helps sharpen it.
         For a perfect switch, typically the background is one layer, and the "liquid" is the handle morphing.
         Let's stick to the classic implementation: 
         The filter is applied to a container holding the 'connector' and the 'balls'. 
         Since my background is the full pill, it might look okay. 
         Let's refine: The standard CSS goo trick works best on single-color blobs. 
         Multi-color can get weird borders.
         
         Fix: Apply filter only to the Alpha channel? No, creating liquid motion usually involves the shape itself.
         Let's try it. If it looks bad, I'll adjust.
      */}
        </div>
    );
}
