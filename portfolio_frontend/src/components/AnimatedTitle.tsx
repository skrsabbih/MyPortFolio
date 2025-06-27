import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
}

const AnimatedTitle = ({ text }: AnimatedTitleProps) => {
  return (
    <motion.div
      animate={{
        x: [0, 185, 0, -185, 0], // Left → Right → Center
        opacity: [0.8, 1, 1, 1, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="text-lg sm:text-xl sm:text-2xl font-semibold mb-6 
        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
        bg-clip-text text-transparent tracking-wide"
    >
      {text}
    </motion.div>
  );
};

export default AnimatedTitle;
