import React from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';





const page1 = ({age, setAge}) => {

const handleChange = (event) => {
setAge(event.target.value);
};
    
return (
      
        <main>
            <div className='createplayer'>
                <div className='nameplayer'>
                    <Box sx={{ '& > :not(style)': { m: 3 } }}>
                        <TextField
                            id="input-with-icon-textfield"
                            label="PLAYER NAME"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CatchingPokemonIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                    </Box>
                </div>
                <div className='genderplayer'>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className='picplayer'>
                    <img src="./images/femaleprofile.jpg" alt=""/>
                    <img src="./images/maleprofile.jpg" alt=""/>                
                </div>
                <div className='ageplayer'>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="simple-select-label">Age</InputLabel>
                            <Select
                            labelId="simple-select-label"
                            id="simple-select"
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
            </div>
        </main>  
    );
}

export default page1;

