
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
        tools: ["Photoshop", "Illustrator"],
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
        logo: "/images/projects/liverpool/Liverpool.png",
    },
    {
        slug: "cowary-social",
        title: "Cowary Farms",
        subtitle: "Social Media",
        category: "Social Media",
        description: "A strategic social media campaign for Cowary Farms, enhancing brand presence and community engagement through visually compelling content and storytelling. The project focused on highlighting sustainable farming practices and connecting with the audience on a personal level.",
        tools: ["Photoshop", "Instagram"], // Guessed tools based on social media context, user said 'keep this also as the previous updated card', maybe implying structure. I'll use typical social media tools.
        images: [
            "/images/projects/cowary/Gvlobal stage!.jpg",
            "/images/projects/cowary/A Day on the Farm.jpg",
            "/images/projects/cowary/Beekeeping Training Flyer.jpg",
            "/images/projects/cowary/Goat Farming.jpg",
            "/images/projects/cowary/Happy Easter.jpg",
        ],
        gallery: [
            "/images/projects/cowary/2.jpg",
            "/images/projects/cowary/A Day on the Farm.jpg",
            "/images/projects/cowary/Artboard 1.1.png",
            "/images/projects/cowary/Artboard 2.png",
            "/images/projects/cowary/Artboard 4.jpg",
            "/images/projects/cowary/Artboard 5.jpg",
            "/images/projects/cowary/Beekeeping Training Flyer.jpg",
            "/images/projects/cowary/Easter Begins at the Roots.jpg",
            "/images/projects/cowary/Goat Farming.jpg",
            "/images/projects/cowary/Gvlobal stage!.jpg",
            "/images/projects/cowary/Happy Easter.jpg",
            "/images/projects/cowary/Labour Day post.jpg",
            "/images/projects/cowary/Meet Us in.jpg",
            "/images/projects/cowary/Ranchers Programme copy.jpg",
            "/images/projects/cowary/Woman Behind the Vision.jpg",
        ],
        logo: "/images/projects/cowary/Cowary Farms Logo-01.png",
        color: "bg-gradient-to-br from-green-500 to-emerald-700", // Updated color to match farm/nature theme
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
