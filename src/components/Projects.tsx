"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import NextImage from "next/image";

// Local projects array removed in favor of shared data


function ProjectCard({ project, index }: { project: any, index: number }) {
    // Simplified card that just acts as a visual trigger for the parent Link
    // We can keep the hover effects (carousel preview) if desired, but for now let's ensure it doesn't block navigation.

    // We can keep the auto-cycling or hover-cycling if we want, but let's stick to the current visual.
    // I'll keep the state for the carousel preview on hover/interaction if it doesn't interfere.
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigation when changing images
        e.stopPropagation();
        if (project.images && project.images.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (project.images && project.images.length > 0) {
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    };

    return (
        <TiltCard className="w-full h-[400px] md:h-[500px]">
            {/* Pass pointer-events-none to children if we want the whole card to be the link, 
                 but we need pointer-events-auto for buttons. */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm group">
                {/* Background/Image */}
                {project.images && project.images.length > 0 ? (
                    <div className="absolute inset-0 w-full h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <NextImage
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-transform duration-700 ease-in-out"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Controls - kept for previewing images without entering */}
                        {project.images.length > 1 && (
                            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                                <button
                                    onClick={prevImage}
                                    className="p-2 bg-black/50 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all border border-white/10 pointer-events-auto hover:scale-110"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="p-2 bg-black/50 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all border border-white/10 pointer-events-auto hover:scale-110"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        )}

                        {/* Image Counter */}
                        {project.images.length > 1 && (
                            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono text-white/80 border border-white/10 z-20">
                                {currentImageIndex + 1} / {project.images.length}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={`absolute inset-0 ${project.color || project.image} opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-in-out`} />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-20 pointer-events-none">
                    <div className="flex justify-between items-end">
                        <div>
                            {project.category && <p className="text-sm font-mono text-purple-300 mb-2 tracking-widest uppercase">{project.category}</p>}
                            <h3 className="text-4xl font-bold text-white mb-1">{project.title}</h3>
                            {project.subtitle && <p className="text-xl text-gray-300 font-light">{project.subtitle}</p>}
                        </div>
                        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 delay-100 pointer-events-auto">
                            {/* External link button - keep separate if user wants direct access, mostly redundant with Case Study link but good for UX */}
                            {project.link && (
                                <object>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-3 bg-white/10 rounded-full hover:bg-white text-white hover:text-black backdrop-blur-md transition-all border border-white/20 hover:border-white"
                                        onClick={(e) => e.stopPropagation()} // Stop propagation to prevent card navigation
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </object>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </TiltCard>
    );
}

export default function Projects() {
    return (
        <section className="relative z-10 w-full max-w-7xl px-4 md:px-0 mx-auto py-20" id="work">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8"
            >
                <h2 className="text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter">
                    Selected <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Work</span>
                </h2>
                <div className="hidden md:block flex-grow h-[1px] bg-white/20 mx-12" />
                <p className="max-w-xs text-gray-400 text-sm md:text-right">
                    A curated selection of projects that push the boundaries of web development and design.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
                {projects.map((project, i) => (
                    <div key={i} className="group relative block w-full h-[400px] md:h-[500px]">
                        <Link href={`/work/${project.slug}`} className="block w-full h-full">
                            <ProjectCard
                                project={project}
                                index={i}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
