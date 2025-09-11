import React from 'react';
import { motion } from 'framer-motion';

function WelcomeSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        margin: '20px',
      }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        style={{
          fontFamily: 'Arial, sans-serif',
          color: '#333',
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Welcome to Bilmola
      </motion.h1>
    </motion.div>
  );
}

export default WelcomeSection;