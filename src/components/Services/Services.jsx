import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../../varients';

const Services = () => {
  return (
    <motion.section
      className="services-section"
      id="services"
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      
    >
      <motion.h2
        className="services-title"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        What We Offer
      </motion.h2>

      <motion.p
        className="services-subtitle"
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        StackNLearn brings together the tools, resources, and support you need to master modern development.
      </motion.p>

      <div className="services-grid">
        <motion.div
          className="service-card"
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3>Project-Based Learning</h3>
          <p>
            Build real-world applications as you learn. Gain experience that actually matters with hands-on guided projects.
          </p>
        </motion.div>

        <motion.div
          className="service-card"
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3>Tech Stack Guidance</h3>
          <p>
            From MERN to Django, get curated learning paths tailored to your goals with expert-chosen resources.
          </p>
        </motion.div>

        <motion.div
          className="service-card"
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3>Mentor Support</h3>
          <p>
            Our community mentors are here to help when you're stuck — from code reviews to problem solving and career advice.
          </p>
        </motion.div>

        <motion.div
          className="service-card"
          variants={fadeIn('right', 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3>Career Roadmaps</h3>
          <p>
            Follow step-by-step roadmaps for Frontend, Backend, DevOps, and more — designed to help you land your dream job.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
