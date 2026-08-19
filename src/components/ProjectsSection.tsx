import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import Lightbox from './Lightbox';
import { Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getProjects } from '../data/projects';
import { translations } from '../data/translations';

interface ProjectCardProps {
  project: ReturnType<typeof getProjects>[0];
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  onOpenLightbox: (images: string[], index: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, progress, range, targetScale, onOpenLightbox }) => {
  const containerRef = useRef(null);
  
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={containerRef}
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full"
    >
      <motion.div 
        style={{ scale, top: `calc(${index * 28}px)` }}
        className="relative flex flex-col w-full max-w-6xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 transform-gpu origin-top"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-6 gap-4">
          <div className="flex items-center gap-6 sm:gap-10">
            <span className="font-black text-[clamp(3rem,10vw,140px)] leading-none text-[#D7E2EA]">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="uppercase tracking-widest text-sm opacity-60 font-light mb-1">
                {project.category}
              </span>
              <h3 className="font-medium text-[clamp(1.5rem,3vw,2.5rem)] leading-none uppercase">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton link={project.link} />
        </div>

        {/* Bottom Row - Images */}
        <div className="flex flex-col md:flex-row w-full gap-4 flex-1">
          {/* Left Column (40%) */}
          <div className="flex flex-col gap-4 w-full md:w-[40%]">
            <div 
              className="relative w-full group cursor-pointer overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              onClick={() => onOpenLightbox(project.gallery, 0)}
            >
              <img 
                src={project.images.leftTop} 
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Search className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={32} />
              </div>
            </div>
            
            <div 
              className="relative w-full group cursor-pointer overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              onClick={() => onOpenLightbox(project.gallery, 1)}
            >
              <img 
                src={project.images.leftBottom} 
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Search className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={32} />
              </div>
            </div>
          </div>
          
          {/* Right Column (60%) */}
          <div 
            className="w-full md:w-[60%] h-full relative group cursor-pointer overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            onClick={() => onOpenLightbox(project.gallery, 2)}
          >
            <img 
              src={project.images.right} 
              alt={`${project.name} preview main`}
              className="w-full h-full min-h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <Search className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={48} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const projectsData = getProjects(language);
  const t = translations[language].projects;

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const [lightboxState, setLightboxState] = React.useState<{isOpen: boolean, images: string[], index: number}>({
    isOpen: false,
    images: [],
    index: 0
  });

  const handleOpenLightbox = (images: string[], index: number) => {
    setLightboxState({ isOpen: true, images, index });
  };

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full pb-40"
    >
      <FadeIn delay={0} y={40} className="w-full flex justify-center">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-24 leading-none">
          {t.title}
        </h2>
      </FadeIn>

      <div className="w-full flex flex-col items-center">
        {projectsData.map((project, i) => {
          const targetScale = 1 - (projectsData.length - 1 - i) * 0.03;
          // Calculate ranges for the stack effect
          const range = [i * (1 / projectsData.length), 1];
          return (
            <ProjectCard 
              key={project.num} 
              index={i} 
              project={project} 
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
              onOpenLightbox={handleOpenLightbox}
            />
          );
        })}
      </div>

      <Lightbox 
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        initialIndex={lightboxState.index}
        onClose={() => setLightboxState(prev => ({ ...prev, isOpen: false }))}
      />
    </section>
  );
};

export default ProjectsSection;
