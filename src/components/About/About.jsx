import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../../varients';

const About = () => {
  return (
    <motion.section
      className="about-section"
      id="about"
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
    >
      <motion.h2
        className="about-title"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        Why Choose StackNLearn?
      </motion.h2>

      <div className="about-cards">
        <motion.div
          className="about-card"
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3>Learn with Clarity</h3>
          <p>
            We simplify complex concepts into easy-to-understand lessons. Each topic is crafted with clarity, helping you focus on what truly matters.
          </p>
        </motion.div>

        <motion.div
          className="about-card"
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3>Stack-Based Progress</h3>
          <p>
            Follow structured roadmaps tailored to popular tech stacks. Whether it’s MERN, Django, or Flutter, you’ll build real-world skills one layer at a time.
          </p>
        </motion.div>

        <motion.div
          className="about-card"
          variants={fadeIn('right', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3>Built for Real Projects</h3>
          <p>
            Move beyond tutorials — build, deploy, and showcase your projects. StackNLearn prepares you for the real development world.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
