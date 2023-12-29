import { Box, Container, Typography, Grid} from "@mui/material";
import './App.css';
import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import Text from './Textt';
import Buttonn from "./Buttonn";
import TrueFalsebutton from "./TrueFalsebutton";

function App() {
  const [boxSize, setBoxSize] = useState('80vh');
  const [boxSize1, setBoxSize1] = useState('90vh');
  const [boxSize2, setBoxSize2] = useState('100vh');
  const [isVisible, setIsVisible] = useState(true);
  const [vis, notvis] = useState('none');


  const resizeBox = newSize => {
    setBoxSize(newSize);
  };

  const resizeBox1 = newSize1 => {
    setBoxSize1(newSize1);
  };

  const resizeBox2 = newSize2 => {
    setBoxSize2(newSize2);
  };

  const handleButtonClick = () => {
    // Set isVisible to false when the button is clicked
    setIsVisible(false);
  };

  const Centerdiv = centerDIV => {
    notvis('block');
  };

  return <Container  maxWidth="false" disableGutters
  sx={{
    bgcolor: "lightblue", 
    height: boxSize2
    }}>
      <Box
      sx={{
        bgcolor: "tomato",
        height: boxSize1
      }}>
      <Box
      sx={{
        bgcolor: "seagreen",
        height: boxSize
      }}>
        {isVisible && <Text />}
        {isVisible && (
        <Buttonn
          resizeBox={resizeBox}
          resizeBox1={resizeBox1}
          resizeBox2={resizeBox2}
          handleButtonClick={handleButtonClick}
          Centerdiv={Centerdiv}
        />
      )}
        {isVisible && <ImageSlider />}
      </Box>
      </Box>
      <Typography sx={{
        display: vis,
        textAlign: 'center',
        fontFamily: 'cursive', // Replace with the desired font family
        fontSize: '45px', // Replace with the desired font size
        fontWeight: 'bold',
        color: '#333',
        m: 5
      }}>QNA</Typography>
      <Box sx={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
      <Box sx={{display: vis, bgcolor: '#333'}}>
        <Typography sx={{display: vis,color: '#fff', fontFamily: 'sans-serif', m: 2}}>
        The MUI `Box` component can inherently handle custom responsive styles without additional libraries or custom CSS.
        </Typography>
        <TrueFalsebutton/>
      </Box>
      </Box>
      <Container sx={{maxWidth:"lg", display: vis, marginTop: 10, bgcolor: "#fff", height: 123, p: 5}}>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="#333" variant="h5" sx={{fontWeight: "bold"}}>
            🎁 Fun Time
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textPrimary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      

  </Container>;
}

export default App;
