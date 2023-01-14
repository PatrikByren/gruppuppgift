import React from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
/*import female from './images/TrainerFemale.jpg'
import male from './images/TrainerMale.jpg'*/

const page1 = ({age, setAge}) => {


const handleChange = (event) => {
setAge(event.target.value);
};
    
return (
        
        <div className='createPlayer'>
            <FormControl>
                <FormLabel id="row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
            </FormControl>
            <div className='Trainers'>
            
            </div>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value={10}>0-17</MenuItem>
                <MenuItem value={20}>18-30</MenuItem>
                <MenuItem value={30}>31+</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Button value={"traine"} variant="contained">CREATE A PLAYER</Button>
        </div>
        
    );
}

export default page1;

