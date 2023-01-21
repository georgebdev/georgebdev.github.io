import { Button, Box, Slide } from '@chakra-ui/react';
import './App.css';
import { useState } from 'react';
function App() {

  const [isOpen, setOpen] = useState(false);

  function onToggle() {
    setOpen(!isOpen)
  }

  return (
    <div className="App mt-5">
      <h1 className='text-6xl'>Test Website</h1>
      <br />
      <Button onClick={onToggle} colorScheme='teal'>Click Me</Button>
      <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          This is a test
        </Box>
      </Slide>
    </div>
  );
}

export default App;
