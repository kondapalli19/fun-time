import { Container, Button } from '@mui/material';

const Buttonn = ({ resizeBox, resizeBox1, resizeBox2, handleButtonClick, Centerdiv }) =>{

    const handleResize = () => {
        // Call resizeBox with the new size
        resizeBox('10vh');
      };
      const handleResize1 = () => {
        // Call resizeBox with the new size
        resizeBox1('20vh');
      };

      const handleResize2 = () => {
        // Call resizeBox with the new size
        resizeBox2('100vh');
      };

      const DivVis = () => {
        // Call resizeBox with the new size
        Centerdiv('block');
      };

    return(
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button variant="contained"
            onClick={() => { handleResize(); handleResize1(); handleResize2(); handleButtonClick(); DivVis();}}
            sx={{
               m: 'auto',
                bgcolor: 'tomato',
                fontFamily: 'inherit',
                '&:hover': {
                 backgroundColor: 'lightblue', 
                 color: 'black'// Change styles on hover
    },
            }}>
            Get Started</Button>
        </Container>
    );
};
export default Buttonn;