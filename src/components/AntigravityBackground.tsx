"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const AntigravityBackground = () => {
    const [elements, setElements] = useState<any[]>([])

    useEffect(() => {
        // Generate random elements on client only to avoid hydration mismatch
        const newElements = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 300 + 50, // Large soft blobs
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5
        }))
        setElements(newElements)
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-black">
            {/* Deep dark gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-black to-purple-950/20" />

            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute rounded-full mix-blend-screen filter blur-3xl opacity-20"
                    style={{
                        background: `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.4) 0%, rgba(0,0,0,0) 70%)`,
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        width: el.size,
                        height: el.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: el.delay,
                    }}
                />
            ))}

            {/* Overlay to darken slightly */}
            <div className="absolute inset-0 bg-black/40" />
        </div>
    )
}

export default AntigravityBackground
