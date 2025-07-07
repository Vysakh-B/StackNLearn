import React from 'react';
import './Home.css';
import developmentImage from '../../assets/images/development.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '../../varients';


const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <motion.div
          className="hero-content"
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
        >
          <h1>
            Welcome to <span>StackNLearn</span>
          </h1>
          <p>
            Learn the Stack, Deploy the Future.
          </p>
          <a href="#stacks" className="cta-button">
            Explore Stacks
          </a>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
        >
          <img src={developmentImage} alt="StackNLearn Illustration" />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
