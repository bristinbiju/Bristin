
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

// Simple SVG icons for tools
function ToolIcon({ name }: { name: string }) {
    const iconClass = "w-6 h-6 fill-current text-gray-300 group-hover:text-white transition-colors";

    switch (name.toLowerCase()) {
        case "photoshop":
            return (
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
                    <path d="M0 0v24h24V0H0Zm2.592 2.304h19.152v19.152H2.592V2.304ZM5.28 6.48v1.632h1.632v9.408h1.632V8.112h1.104V6.48H5.28Zm5.04 0v1.632h.576c1.104 0 2.016.912 2.016 2.016v.576c0 1.104-.912 2.016-2.016 2.016h-.576v1.44c0 .816.624 1.44 1.44 1.44h.576v1.632h-3.456v-1.632h.576c.816 0 1.44-.624 1.44-1.44v-1.44h-.576c-1.104 0-2.016-.912-2.016-2.016v-.576c0-1.104.912-2.016 2.016-2.016h.576V6.48h-1.632Z" />
                    {/* Placeholder Ps - simplifying for reliability if pure SVG paths are complex without library. 
                        Actually, let's use text fallback or simple geometric representations if specific brand icons are hard to inline perfectly. 
                        Better yet, I'll use a generic icon map or just the first two letters for unknown ones, but specifically Ps, Ai, Figma. 
                    */}
                    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor">Ps</text>
                </svg>
            );
        case "illustrator":
            return (
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">Ai</text>
                </svg>
            );
        case "figma":
            return (
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
                    <path d="M12 2a4 4 0 0 0-4 4v4h4a4 4 0 0 0 4-4 4 4 0 0 0-4-4zm-4 8v4a4 4 0 0 0 4 4v-4h-4zm0 8a4 4 0 0 0 4 4 4 4 0 0 0-4-4zM16 8a4 4 0 0 0 0 8 4 4 0 0 0 0-8z" />
                </svg>
            );
        case "next.js":
            return (
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 5h1.5v7.25l3.5-3.5h2l-4.5 4.5v-8.25zm-3 14a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
                    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">N</text>
                </svg>
            );
        case "react":
            return (
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="2" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" transform="rotate(0 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" transform="rotate(120 12 12)" />
                </svg>
            );
        case "tailwind css":
        case "tailwind":
            return (
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
            );
        case "canva":
            return (
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.5-5h3v-2h-3v2zm4.5-3.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5z" />
                    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">Ca</text>
                </svg>
            );
        case "instagram":
            return (
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            );
        default:
            // Fallback: First two letters
            return (
                <div className="flex items-center justify-center w-full h-full">
                    <span className="font-mono font-bold text-xs">{name.slice(0, 2)}</span>
                </div>
            );
    }
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden">
            {/* Background noise/grain if needed, or keeping it clean */}

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {/* Back Link */}
                <Link href="/#work" className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Work
                </Link>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
                    <div className="max-w-2xl">
                        <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4">{project.category}</p>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{project.title}</h1>
                        {project.subtitle && <h2 className="text-2xl md:text-3xl text-gray-400 font-light">{project.subtitle}</h2>}
                    </div>

                    {/* Brand Logo (Top Right) */}
                    {project.logo && (
                        <div className={`relative w-32 h-32 md:w-40 md:h-40 rounded-xl ${project.logoBg || "bg-white/5"} border border-white/10 p-4 flex items-center justify-center overflow-hidden backdrop-blur-sm`}>
                            <Image
                                src={project.logo}
                                alt={`${project.title} Logo`}
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                        </div>
                    )}
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-24 border-t border-white/10 pt-12">
                    {/* Brand Description */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold mb-6">About the Project</h3>
                        <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                            {project.description}
                        </p>
                    </div>

                    {/* Tools Used Column */}
                    <div>
                        <div className="flex flex-col gap-8 justify-start">
                            <div className="flex flex-col items-start">
                                <h3 className="text-xl font-bold mb-6">Tools Used</h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.tools.map((tool, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Link */}
                            {project.link && (
                                <div className="flex flex-col items-start pt-4">
                                    <h3 className="text-xl font-bold mb-4">Live Project</h3>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors border-b border-purple-400/30 hover:border-purple-300 pb-1"
                                    >
                                        View on Behance <ExternalLink className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="mb-20">
                    <h3 className="text-xl font-bold mb-8">Design Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {project.gallery && project.gallery.length > 0 ? (
                            project.gallery.map((img, i) => (
                                <div key={i} className="relative w-full bg-white/5 rounded-xl overflow-hidden border border-white/10">
                                    <Image
                                        src={img}
                                        alt={`${project.title} gallery image ${i + 1}`}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="w-full h-auto"
                                    />
                                </div>
                            ))
                        ) : (
                            // Placeholder gallery if empty
                            [1, 2, 3].map((n) => (
                                <div key={n} className="relative aspect-[3/4] w-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                                    <span className="text-gray-600">Image {n}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
