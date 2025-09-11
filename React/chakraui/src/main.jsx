import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Demo from './Demo.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Demo  />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);