import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, TextField } from '@mui/material';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
export default function ButtonAppBar() {
  const [name,setName]=useState("");
  const [fruit,setFruit]=useState("");
  function handleSubmit(event){
    event.preventDefault();
    console.log("Name : "+name+"\nFruit : "+fruit);
    setName("");
    setFruit("");
  }
  return (
    <Container sx={{margin:"auto", textAlign:"center"}}>
      <Typography variant='h6' sx={{mt:2}}>
        Enter your name and favourite fruit
      </Typography>
      <form onSubmit={handleSubmit}>
       <TextField label="Name" name="name" variant='outlined' value={name} onChange={(event)=>{
       setName(event.target.value);
       }} fullWidth margin='normal'/>
       <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Fruit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fruit}
          label="Age"
          onChange={(event)=>{
            setFruit(event.target.value);
          }}
        >
          <MenuItem value="Apple">Apple</MenuItem>
          <MenuItem value="Banana">Banana</MenuItem>
          <MenuItem value="Cherry">Cherry</MenuItem>
          <MenuItem value="Durian">Durian</MenuItem>
          <MenuItem value="ElderBerry">ElderBerry</MenuItem>
        </Select>
      </FormControl>
       <button type='submit'>Submit</button>
      </form>
    </Container>
    );
}
