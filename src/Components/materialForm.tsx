import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { FC, Fragment } from 'react';


const MatForm:FC = () => {

    const  handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
       console.log('Test - form');
    }

    return (
        <Fragment>
            <Box>
                <form onSubmit={handleSubmit}>

            <label htmlFor='outlined-basic'> Enter some value </label>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                {/* <button type='submit' > Submit </button> */}
                <Button type='submit' variant="contained">Contained</Button>
                </form>
            </Box>
        </Fragment>
    )
}


export default MatForm ;