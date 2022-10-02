import { Select, MenuItem, FormHelperText, FormControl, InputLabel, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Classes from './listOfCourses';

function RegisterClasses() {
    const [selectedYear, setYearSelected] = useState('');
    const [selectedTerm, setTermSelected] = useState('');
    let navigate = useNavigate();

    const selectionYearChangeHandler = (event) => {
        setYearSelected(event.target.value);
    };

    const selectionTermChangeHandler = (event) => {
        setTermSelected(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.clear();
        localStorage.setItem("selectedYear", selectedYear);
        localStorage.setItem("selectedTerm", selectedTerm);
        navigate('/cls');
    }

    return (
        <div>
            <Typography align="center" variant="h1">
                Welcome To UTA
            </Typography>
            <Typography align="center" variant="h4">
                Please select  Year and Term to proceed
            </Typography>
            <form onSubmit={handleSubmit}>
                <Typography style={{ marginTop: 50, marginLeft: 100 }} variant="h5" >
                    Please Select Year
                </Typography>
                <FormControl style={{ marginTop: 10, marginLeft: 100 }}>
                    <InputLabel>Year</InputLabel>
                    <Select value={selectedYear} onChange={selectionYearChangeHandler}>
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                    </Select>
                    <FormHelperText>Please Select  Year</FormHelperText>
                </FormControl>
                <br />
                <Typography style={{ marginTop: 30, marginLeft: 100 }} variant="h5" >
                    Please Select Term
                </Typography>
                <FormControl style={{ marginTop: 10, marginLeft: 100 }}>
                    <InputLabel>Term</InputLabel>
                    <Select value={selectedTerm} onChange={selectionTermChangeHandler}>
                        <MenuItem value={'Fall'}>Fall</MenuItem>
                        <MenuItem value={'Spring'}>Spring</MenuItem>
                        <MenuItem value={'Summer'}>Summer</MenuItem>
                    </Select>
                    <FormHelperText>Please Select  Term</FormHelperText>
                </FormControl>
                <br />
                <Button type="submit" style={{ marginTop: 30, marginLeft: 100 }} variant="contained" color="primary"> Submit
                </Button>
            </form >
        </div >
    );
}

export default RegisterClasses;