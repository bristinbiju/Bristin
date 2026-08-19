import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const characters = word.split('');
        return (
          <span key={`word-${i}`} className="mr-2 sm:mr-3 md:mr-4 flex mb-2">
            {characters.map((char, j) => {
              // Calculate a unique index for each character relative to the whole text
              const charIndex = text.indexOf(word) + j; 
              // A more robust way to calculate char index
              // We'll calculate progress points based on the index
              
              // We'll just distribute the characters evenly across the progress
              // We don't have the exact total char count easily here for this map without pre-calculating,
              // but we can estimate or compute it.
              return (
                <Character 
                  key={`char-${i}-${j}`} 
                  char={char} 
                  progress={scrollYProgress} 
                  charIndex={charIndex} 
                  totalChars={text.length} 
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

const Character = ({ char, progress, charIndex, totalChars }: any) => {
  const start = charIndex / totalChars;
  const end = start + (1 / totalChars);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
