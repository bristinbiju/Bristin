
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

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
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/5 border border-white/10 p-4 flex items-center justify-center overflow-hidden backdrop-blur-sm">
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

                    {/* Tools Used */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Tools Used</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.tools.map((tool, i) => (
                                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                    {tool}
                                </span>
                            ))}
                        </div>

                        {/* Project Link */}
                        {project.link && (
                            <div className="mt-8">
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

                {/* Gallery */}
                <div className="mb-20">
                    <h3 className="text-xl font-bold mb-8">Design Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {project.gallery && project.gallery.length > 0 ? (
                            project.gallery.map((img, i) => (
                                <div key={i} className="relative aspect-[3/4] md:aspect-[4/5] w-full bg-white/5 rounded-xl overflow-hidden border border-white/10 group">
                                    <Image
                                        src={img}
                                        alt={`${project.title} gallery image ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay for aesthetic */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
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
