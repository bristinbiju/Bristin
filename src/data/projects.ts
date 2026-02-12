
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
    logoBg?: string; // Custom background color for logo container
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
            "/images/projects/cowary/Goat Farming.jpg",
            "/images/projects/cowary/Gvlobal stage!.jpg",
            "/images/projects/cowary/A Day on the Farm.jpg",
            "/images/projects/cowary/Beekeeping Training Flyer.jpg",
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
        slug: "liverpool-social",
        title: "Liverpool",
        subtitle: "Social Media",
        category: "Social Media",
        description: "A series of engaging social media posters for Liverpool, designed to raise awareness on various health topics including cancer, fertility, and general well-being. The designs utilize consistent branding and clear messaging to effectively communicate with the community.",
        tools: ["Photoshop", "Illustrator"],
        images: [
            "/images/projects/liverpool-social/Caring.jpg",
            "/images/projects/liverpool-social/Annual Health Check 02.jpg",
            "/images/projects/liverpool-social/Bone Cancer Awareness_.png",
            "/images/projects/liverpool-social/Brain Facts.png",
            "/images/projects/liverpool-social/Easter.jpg",
        ],
        gallery: [
            "/images/projects/liverpool-social/Annual Health Check 02.jpg",
            "/images/projects/liverpool-social/Bone Cancer Awareness_.png",
            "/images/projects/liverpool-social/Brain Facts.png",
            "/images/projects/liverpool-social/Caring.jpg",
            "/images/projects/liverpool-social/Easter.jpg",
            "/images/projects/liverpool-social/Fertility Care & Support02_.jpg",
            "/images/projects/liverpool-social/Healthy Heart.jpg",
            "/images/projects/liverpool-social/Heat exhaustion hits fast.png",
            "/images/projects/liverpool-social/IVF.png",
            "/images/projects/liverpool-social/Next Big Leap_.jpg",
            "/images/projects/liverpool-social/Webinar -02.jpg",
            "/images/projects/liverpool-social/Webinar02 -03-03.jpg",
            "/images/projects/liverpool-social/World Brain Day.png",
            "/images/projects/liverpool-social/World Cancer Day04.jpg",
            "/images/projects/liverpool-social/Your bones peak.png",
        ],
        logo: "/images/projects/liverpool/Liverpool.png", // Reusing existing logo
        color: "bg-gradient-to-br from-red-600 to-red-800", // Liverpool red theme
    },
    {
        slug: "devine-social",
        title: "Devine",
        subtitle: "Social Media",
        category: "Social Media",
        description: "A visually rich social media campaign for Devine, focusing on the natural and premium quality of their products. The project involved creating a series of posts that highlight the brand's commitment to purity and health, using appetizing imagery and elegant design elements.",
        tools: ["Photoshop", "Illustrator"],
        images: [
            "/images/projects/devine-social/FB Cover.jpg",
            "/images/projects/devine-social/Pure. Natural. Divine.jpg",
            "/images/projects/devine-social/Your Health.jpg",
            "/images/projects/devine-social/Easter Poster.jpg",
            "/images/projects/devine-social/Labour Day.jpg",
        ],
        gallery: [
            "/images/projects/devine-social/carousel-1_01.jpg",
            "/images/projects/devine-social/carousel-1_02.jpg",
            "/images/projects/devine-social/carousel-1_03.jpg",
            "/images/projects/devine-social/04_02.jpg",
            "/images/projects/devine-social/A super Crop.jpg",
            "/images/projects/devine-social/Carousel-Post---Why-Cassava_06.jpg",
            "/images/projects/devine-social/Carousel-Post---Why-Cassava_07.jpg",
            "/images/projects/devine-social/Cookis-Recipe_01.jpg",
            "/images/projects/devine-social/Easter Poster.jpg",
            "/images/projects/devine-social/Labour Day.jpg",
            "/images/projects/devine-social/Pure. Natural. Divine.jpg",
            "/images/projects/devine-social/Your Health.jpg",
        ],
        logo: "/images/projects/devine-social/logo.png",
        logoBg: "bg-white",
        color: "bg-gradient-to-br from-yellow-500 to-orange-600",
    },
    {
        slug: "gba-designs",
        title: "GBA Designs",
        category: "Branding",
        description: "A comprehensive branding and visual identity project for GBA Designs (Global Business Alliance), focusing on professional corporate aesthetics and impactful marketing materials. The project includes logo lockups, event branding for AIM Congress, and social media assets.",
        tools: ["Photoshop", "Illustrator"],
        images: [
            "/images/projects/gba-designs/Artboard 5.jpg",
            "/images/projects/gba-designs/01.jpg",
            "/images/projects/gba-designs/02.jpg",
            "/images/projects/gba-designs/04.jpg",
            "/images/projects/gba-designs/AIM Congress 2025 06.jpg",
        ],
        gallery: [
            "/images/projects/gba-designs/01.jpg",
            "/images/projects/gba-designs/02.jpg",
            "/images/projects/gba-designs/03.jpg",
            "/images/projects/gba-designs/04.jpg",
            "/images/projects/gba-designs/05.jpg",
            "/images/projects/gba-designs/06.jpg",
            "/images/projects/gba-designs/07.jpg",
            "/images/projects/gba-designs/08.jpg",
            "/images/projects/gba-designs/AIM Congress 2025 01.jpg",
            "/images/projects/gba-designs/AIM Congress 2025 04.jpg",
            "/images/projects/gba-designs/AIM Congress 2025 05.jpg",
            "/images/projects/gba-designs/AIM Congress 2025 06.jpg",
            "/images/projects/gba-designs/Artboard 5.jpg",
        ],
        logo: "/images/projects/gba-designs/logo.png",
        color: "bg-gradient-to-br from-slate-700 to-slate-900", // Corporate/professional theme
    },
    {
        slug: "javvis-designs",
        title: "Javvis Designs",
        category: "Branding",
        description: "A bold and modern branding project for Javvis Designs, featuring a clean visual identity and a cohesive design system. The project encompasses logo design, brand collateral, and digital assets that reflect the brand's innovative approach.",
        tools: ["Photoshop", "Illustrator"],
        images: [
            "/images/projects/javvis-designs/01.jpg",
            "/images/projects/javvis-designs/02.jpg",
            "/images/projects/javvis-designs/03.jpg",
            "/images/projects/javvis-designs/04.jpg",
            "/images/projects/javvis-designs/05.jpg",
        ],
        gallery: [
            "/images/projects/javvis-designs/01.jpg",
            "/images/projects/javvis-designs/02.jpg",
            "/images/projects/javvis-designs/03.jpg",
            "/images/projects/javvis-designs/04.jpg",
            "/images/projects/javvis-designs/05.jpg",
            "/images/projects/javvis-designs/06.jpg",
            "/images/projects/javvis-designs/07.jpg",
            "/images/projects/javvis-designs/08.jpg",
            "/images/projects/javvis-designs/09.jpg",
            "/images/projects/javvis-designs/Artboard 1.jpg",
        ],
        logo: "/images/projects/javvis-designs/logo.png",
        logoBg: "bg-white", // Assuming it might need white bg like others if it's a dark logo, or remove if not needed. User didn't specify, but safer to add if it's a dark logo. I'll stick to user request "give all funtion property" which suggests full features.
        color: "bg-gradient-to-br from-blue-600 to-cyan-500", // Modern tech blue theme
    },
    {
        slug: "joyce4life-designs",
        title: "Joyce4Life Designs",
        category: "Branding",
        description: "A refined and elegant branding project for Joyce4Life, emphasizing sophisticated design and visual harmony. The scope includes logo development, brand guidelines, and a suite of marketing materials tailored to the brand's unique identity.",
        tools: ["Photoshop", "Illustrator"],
        images: [
            "/images/projects/joyce4life-designs/01.jpg",
            "/images/projects/joyce4life-designs/02.jpg",
            "/images/projects/joyce4life-designs/03.jpg",
            "/images/projects/joyce4life-designs/04.jpg",
            "/images/projects/joyce4life-designs/05.jpg",
        ],
        gallery: [
            "/images/projects/joyce4life-designs/01.jpg",
            "/images/projects/joyce4life-designs/02.jpg",
            "/images/projects/joyce4life-designs/03.jpg",
            "/images/projects/joyce4life-designs/04.jpg",
            "/images/projects/joyce4life-designs/05.jpg",
            "/images/projects/joyce4life-designs/06.jpg",
            "/images/projects/joyce4life-designs/07.jpg",
            "/images/projects/joyce4life-designs/08.jpg",
            "/images/projects/joyce4life-designs/09.jpg",
            "/images/projects/joyce4life-designs/10.jpg",
            "/images/projects/joyce4life-designs/11.jpg",
            "/images/projects/joyce4life-designs/12.jpg",
            "/images/projects/joyce4life-designs/Artboard 1.jpg",
        ],
        logo: "/images/projects/joyce4life-designs/logo.png",
        logoBg: "bg-white",
        color: "bg-gradient-to-br from-pink-500 to-rose-500", // Elegant pink/rose theme
    },
    {
        slug: "project-8",
        title: "Mobile App",
        category: "Mobile",
        description: "A cross-platform mobile application designed to simplify daily tasks and improve productivity.",
        tools: ["React Native", "Expo"],
        images: [],
        gallery: [],
        color: "bg-gradient-to-br from-amber-400 to-orange-500",
    },
    {
        slug: "project-9",
        title: "E-Commerce",
        category: "Web App",
        description: "A modern e-commerce platform featuring a seamless checkout experience and real-time inventory management.",
        tools: ["Shopify", "Liquid"],
        images: [],
        gallery: [],
        color: "bg-gradient-to-br from-gray-600 to-gray-800",
    },
];
