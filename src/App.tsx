import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Search from './components/Search';


function App() {
  return (
    <>
      <ChakraProvider>
        <Search />
      </ChakraProvider>
    </>
  );
}

export default App;
