import React, { useState } from 'react';
import CopyCat from './CopyCat';

const images = {
  copycat:
    'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat:
    'https://content.codecademy.com/courses/React/react_photo_quietcat.png',
};

const CopyCatContainer = () => {
  const [copying, setCopying] = useState(true);
  const [input, setInput] = useState('');
  const [name, setName] = useState('Sushi');

  const toggleTape = () => {
    setCopying(!copying);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <CopyCat
      copying={copying}
      toggleTape={toggleTape}
      images={images}
      input={input}
      handleChange={handleChange}
      name={name}
    />
  );
};

export default CopyCatContainer;
