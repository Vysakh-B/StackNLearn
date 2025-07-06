import React from 'react';
import './Stack.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../../varients';

const stacks = [
  { name: 'React', description: 'Build fast and responsive frontends with React.js' },
  { name: 'Python', description: 'Write clean and powerful scripts with Python' },
  { name: 'Django', description: 'Develop secure and scalable backends with Django' },
  { name: 'MERN Stack', description: 'Master MongoDB, Express, React, and Node.js' },
  { name: 'Machine Learning', description: 'Create intelligent models with ML & data science' },
  { name: 'Flutter', description: 'Build native mobile apps using a single codebase' }
];

const Stacks = () => {
  return (
    <motion.section
      className="stacks-section"
      id="stacks"
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
    >
      <motion.h2
        className="stacks-title"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        Our Tech Stacks
      </motion.h2>

      <motion.p
        className="stacks-subtitle"
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        {/* We provide structured learning paths on top modern development stacks. */}
      </motion.p>

      <div className="stacks-grid">
        {stacks.map((stack, index) => (
          <motion.div
            className="stack-card"
            key={index}
            variants={fadeIn('up', 0.2 + index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
          >
            <h3>{stack.name}</h3>
            <p>{stack.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Stacks;
