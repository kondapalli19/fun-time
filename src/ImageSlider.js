import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';
import logo from './santa.gif';

const ImageContainer = styled(Paper)({
  overflow: 'hidden',
  width: '50vh', // Adjust the width as needed
});

const MovingImage = styled('img')({
  transition: 'margin-left 0.5s ease', // Adjust the duration and easing as needed
});

const ImageSlider = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        // Reset to 0 when it reaches the right side (adjust the limit as needed)
        return prevPosition >= 1800 ? 0 : prevPosition + 2;
      });
    }, 16); // Adjust the interval based on your animation speed

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageContainer sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      
      <MovingImage
        src={logo} // Replace with your image source
        alt="Moving Image"
        style={{ marginLeft: `${position}px`, position: 'absolute', bottom: 117, height: "60vh" }}
      />
    </ImageContainer>
  );
};

export default ImageSlider;
