"use client";


import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    useScroll,
    useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";

const ROTATION_RANGE = 25; // MAX ANGLE
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export const TiltCard = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = React.useState(false);

    // Mouse Motion Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

    // Scroll Motion Values for Mobile
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect on mobile: slight rotation as it scrolls
    const scrollRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
    const scrollY = useTransform(scrollYProgress, [0, 1], [50, -50]);


    useEffect(() => {
        const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Create a 3D rotation transform based on input (mouse or scroll)
    const transformMouse = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
    const transformScroll = useMotionTemplate`perspective(1000px) rotateX(${scrollRotateX}deg) translateY(${scrollY}px)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || isMobile) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left);
        const mouseY = (e.clientY - rect.top);

        const rY = ((mouseX / width) - 0.5) * ROTATION_RANGE;
        const rX = ((mouseY / height) - 0.5) * ROTATION_RANGE * -1;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform: isMobile ? transformScroll : transformMouse,
            }}
            className={cn("relative group/card", className)}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="h-full w-full"
            >
                {children}
            </div>
        </motion.div>
    );
};
