import { motion } from "framer-motion";

interface AnimatedHamburgerProps {
  isOpen: boolean;
}

const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({ isOpen }) => {
  const topLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 8 },
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -8 },
  };

  return (
    <div
      className="relative w-10 h-10 focus:outline-none hover:cursor-pointer"
      aria-expanded={isOpen}
      aria-label="Toggle menu"
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <motion.span
          className="w-6 h-0.5 bg-gray-600 mb-1.5"
          variants={topLineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-gray-600 mb-1.5"
          variants={middleLineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-gray-600"
          variants={bottomLineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default AnimatedHamburger;
