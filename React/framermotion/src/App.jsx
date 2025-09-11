import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 1.5 }}
    >
      Hello Framer Motion
    </motion.div>
  );
}

export default App;