"use client";

import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
import Image from "next/image";
import { PenTool, ShoppingBag, Smartphone, Cpu } from "lucide-react";

const services = [
    {
        title: "Brand Identity",
        description: "Logo systems, visual guidelines, and typography that tell your story.",
        icon: PenTool,
        color: "from-purple-500 to-indigo-600",
        image: "/images/services/Brand.jpg"
    },
    {
        title: "Print & Editorial",
        description: "Large-format event signage, magazines, and brochures for physical impact.",
        icon: ShoppingBag, // Placeholder for print/merch
        color: "from-pink-500 to-rose-600",
        image: "/images/services/print_media.jpg"
    },
    {
        title: "Digital & Social",
        description: "High-conversion ad creatives and social media kits to drive engagement.",
        icon: Smartphone,
        color: "from-blue-400 to-cyan-500",
        image: "/images/services/digital_social.jpg"
    },
    {
        title: "Motion & AI",
        description: "Basic motion graphics and AI-enhanced concepting for modern visuals.",
        icon: Cpu,
        color: "from-emerald-400 to-teal-600",
        image: "/images/services/motion_ai.jpg"
    }
];

export default function Services() {
    return (
        <section className="relative z-10 w-full max-w-7xl px-4 md:px-0 mx-auto py-20" id="services">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Delivering comprehensive design solutions from concept to execution.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, i) => {
                    const Icon = service.icon;
                    return (
                        <TiltCard key={i} className="h-[300px]">
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col justify-between group">
                                {service.image && (
                                    <div className="absolute inset-0 z-0">
                                        <div className="absolute inset-0 bg-black/40 z-10" />
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover opacity-[0.47] group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                )}
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-20 blur-2xl -translate-y-10 translate-x-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 z-0`} />

                                <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-white/5 relative z-10">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 opacity-50" />
                            </div>
                        </TiltCard>
                    );
                })}
            </div>
        </section>
    );
}
