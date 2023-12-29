import { Container, Typography } from '@mui/material';

const Textt = () =>{
    return(
        <Container>
        <Typography
        sx={{  
        textAlign: 'center',
        fontFamily: 'cursive', // Replace with the desired font family
        fontSize: '56px', // Replace with the desired font size
        fontWeight: 'bold',
        color: 'white'
        
      }}
      >Merry Christmas
      </Typography>
        </Container>
    );
};
export default Textt;