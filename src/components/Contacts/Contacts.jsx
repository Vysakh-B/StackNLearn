import React from 'react';
import './Contacts.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../../varients';

const Contacts = () => {
  return (
    <motion.section
      className="contact-section"
      id="contact"
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h2
        className="contact-title"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
      >
        We'd love to hear from you! Fill out the form and our team will get back to you shortly.
      </motion.p>

      <motion.form
        className="contact-form"
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView="show"
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          name="name"
          className="contact-input"
          variants={fadeIn('left', 0.4)}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          name="email"
          className="contact-input"
          variants={fadeIn('right', 0.5)}
        />
        <motion.textarea
          rows="5"
          placeholder="Your Message"
          name="message"
          className="contact-textarea"
          variants={fadeIn('up', 0.6)}
        />
        <motion.button
          type="submit"
          className="contact-button"
          variants={fadeIn('up', 0.7)}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contacts;
