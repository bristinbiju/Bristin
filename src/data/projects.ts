
import { StaticImageData } from "next/image";

export interface Project {
    slug: string;
    title: string;
    subtitle?: string;
    category: string;
    description: string;
    tools: string[];
    images: string[]; // Main carousel images or thumbnail
    gallery: string[]; // 3-column gallery images
    link?: string;
    logo?: string; // Brand logo
    color?: string; // Gradient color for placeholder
}


export const projects: Project[] = [
    {
        slug: "you-can",
        title: "You Can",
        subtitle: "Liverpool",
        category: "Campaign",
        description: "A comprehensive campaign for Liverpool's 'You Can' initiative, focusing on community empowerment and health awareness. The project involved creating a cohesive visual identity that resonates with the target audience, utilizing bold typography and emotive imagery.",
        tools: ["Photoshop", "Illustrator", "Figma"],
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
        gallery: [
            "/images/projects/liverpool/liverpool-01.png",
            "/images/projects/liverpool/liverpool-02.png",
            "/images/projects/liverpool/liverpool-03.png",
            "/images/projects/liverpool/liverpool-04.png",
            "/images/projects/liverpool/liverpool-05.png",
            "/images/projects/liverpool/liverpool-06.png",
        ],
        link: "https://www.behance.net/gallery/218572583/World-Cancer-Day?share=1", // External link
        logo: "/images/projects/liverpool/liverpool-01.png", // Using first image as logo placeholder for now
    },
    {
        slug: "project-alpha",
        title: "Project Alpha",
        category: "E-Commerce",
        description: "A modern e-commerce platform designed for scalability and user experience. This project aimed to streamline the shopping process with a clean, intuitive interface.",
        tools: ["Next.js", "Tailwind CSS", "Stripe"],
        images: [],
        gallery: [],
        color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    },
    {
        slug: "project-beta",
        title: "Project Beta",
        category: "Dashboard",
        description: "An analytics dashboard featuring real-time data visualization and complex reporting tools.",
        tools: ["React", "D3.js", "Node.js"],
        images: [],
        gallery: [],
        color: "bg-gradient-to-br from-blue-400 to-cyan-500",
    },
    {
        slug: "project-gamma",
        title: "Project Gamma",
        category: "Landing Page",
        description: "A high-conversion landing page for a SaaS product, focusing on clear value propositions and call-to-actions.",
        tools: ["Framer Motion", "React", "Tailwind"],
        images: [],
        gallery: [],
        color: "bg-gradient-to-br from-pink-500 to-rose-500",
    },
];
