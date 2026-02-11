"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
    {
        title: "You Can",
        subtitle: "Liverpool",
        category: "Campaign",
        images: [
            "/images/projects/liverpool/liverpool-01.png",
            "/images/projects/liverpool/liverpool-02.png",
            "/images/projects/liverpool/liverpool-03.png",
            "/images/projects/liverpool/liverpool-04.png",
            "/images/projects/liverpool/liverpool-05.png",
            "/images/projects/liverpool/liverpool-06.png",
            "/images/projects/liverpool/liverpool-07.png",
            "/images/projects/liverpool/liverpool-08.png",
        ],
        link: "https://www.behance.net/gallery/218572583/World-Cancer-Day?share=1",
    },
    {
        title: "Project Alpha",
        category: "E-Commerce",
        image: "bg-gradient-to-br from-indigo-500 to-purple-600",
    },
    {
        title: "Project Beta",
        category: "Dashboard",
        image: "bg-gradient-to-br from-blue-400 to-cyan-500",
    },
    {
        title: "Project Gamma",
        category: "Landing Page",
        image: "bg-gradient-to-br from-pink-500 to-rose-500",
    },
];

function ProjectCard({ project, index, onImageClick }: { project: any, index: number, onImageClick: (imgIndex: number) => void }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (project.images) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (project.images) {
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    };

    // When clicking the image, pass the current local index
    const handleImageClick = () => {
        if (project.images) {
            onImageClick(currentImageIndex);
        }
    };

    return (
        <TiltCard className="w-full h-[400px] md:h-[500px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm group">
                {/* Background/Image */}
                {project.images ? (
                    <div className="absolute inset-0 w-full h-full cursor-pointer" onClick={handleImageClick}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-transform duration-700 ease-in-out"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Controls */}
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

                        {/* Image Counter */}
                        <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono text-white/80 border border-white/10 z-20">
                            {currentImageIndex + 1} / {project.images.length}
                        </div>
                    </div>
                ) : (
                    <div className={`absolute inset-0 ${project.image} opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-in-out`} />
                )}

                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-20 pointer-events-none">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-sm font-mono text-purple-300 mb-2 tracking-widest uppercase">{project.category}</p>
                            <h3 className="text-4xl font-bold text-white mb-1">{project.title}</h3>
                            {project.subtitle && <p className="text-xl text-gray-300 font-light">{project.subtitle}</p>}
                        </div>
                        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 delay-100 pointer-events-auto">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 rounded-full hover:bg-white text-white hover:text-black backdrop-blur-md transition-all border border-white/20 hover:border-white"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </TiltCard>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // Handle lightbox navigation
    const nextLightboxImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedProject && selectedProject.images) {
            setLightboxIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const prevLightboxImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedProject && selectedProject.images) {
            setLightboxIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    const closeLightbox = () => {
        setSelectedProject(null);
        setLightboxIndex(0);
    };

    // Keyboard support for lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedProject) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextLightboxImage();
            if (e.key === 'ArrowLeft') prevLightboxImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject]);

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
                    <ProjectCard
                        key={i}
                        project={project}
                        index={i}
                        onImageClick={(imgIndex) => {
                            if (project.images) {
                                setSelectedProject(project);
                                setLightboxIndex(imgIndex);
                            }
                        }}
                    />
                ))}
            </div>

            {/* Full Screen Lightbox */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Prev Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevLightboxImage(); }}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); nextLightboxImage(); }}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            key={lightboxIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center pointer-events-none"
                        >
                            <div className="relative w-full h-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                                <Image
                                    src={selectedProject.images[lightboxIndex]}
                                    alt={`${selectedProject.title} - Fullscreen`}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Counter/Info */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md text-white/80 font-mono text-sm pointer-events-none">
                            {lightboxIndex + 1} / {selectedProject.images.length} • {selectedProject.title}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
