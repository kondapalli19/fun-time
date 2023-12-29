import React from 'react';
import { Container, Button } from '@mui/material';



const TrueFalsebutton = () => {
    

    return(
        <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button  variant="contained" color="success" sx={{ m: 2,  bgcolor: 'seagreen'}} 
             onClick={() => { alert("Your hard work and perseverance have paid off 🎉");}}
            >True</Button>
            <Button  variant="contained" color="error" sx={{ m: 2, bgcolor: 'tomato'}}
            onClick={() => { alert("Everyone has the right to give wrong opinion 🙃");}}
            >False</Button>
        </Container>
        );
    };
    export default TrueFalsebutton;