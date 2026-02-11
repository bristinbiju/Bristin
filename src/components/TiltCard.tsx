"use client";

import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

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

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

    // Create a 3D rotation transform based on mouse position
    const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        // Calculate mouse position relative to the center of the card
        const mouseX = (e.clientX - rect.left);
        const mouseY = (e.clientY - rect.top);

        // Calculate rotation values
        // RotateX is affected by Y position (tilting up/down)
        // RotateY is affected by X position (tilting left/right)

        // Normalize to -1 to 1 range, then multiply by rotation range.
        // If mouse is at top (0), (0 / height - 0.5) * ROTATION = -0.5 * ROTATION. so negative rotation (tilt away)
        // Actually we want to "lift" the side we are hovering over? Or "push" it?
        // Common effect: push it down. So top hover -> top goes back -> rotateX positive?
        // Let's stick to standard "follow cursor" or "glare".
        // Let's implement "tilt towards mouse" (mouse is "weight").

        const rY = ((mouseX / width) - 0.5) * ROTATION_RANGE; // -12.5 to 12.5
        const rX = ((mouseY / height) - 0.5) * ROTATION_RANGE * -1; // Invert X for natural tilt

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
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
                transform,
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
