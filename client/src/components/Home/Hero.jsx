import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Hero = () => {
  // Animation for the text and button
  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 1000 },
  });

  return (
    <div className="relative bg-[#410F11] text-white py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <animated.div style={springProps}>
          <h1 className="text-5xl font-bold mb-4">Unlock Your Potential with CourseVita</h1>
          <p className="text-lg mb-8">
            Join our expert-led courses in Data Science, Analytics, Software Development, and more. Learn from top industry professionals and advance your career.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/login" // Updated to navigate to the login page
              className="inline-block bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </animated.div>
      </div>
    </div>
  );
};

export default Hero;