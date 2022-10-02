import React, { Component } from 'react';
import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const handleClick = (course) => {
    let _data = {
        courseId: 3,
        userId: 1
    };
    fetch('http://34.71.56.116:8080/courses/register', {
        method: "POST",
        mode: 'no-cors',
        body: JSON.stringify(_data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
        })
        .catch((error) => {
            console.log("Error")
            console.error(error);
        });
}
export default class Classes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: null,
            year: localStorage.getItem("selectedYear"),
            term: localStorage.getItem("selectedTerm")
        };
    }
    componentWillMount() {
        this.renderMyData();
    }
    renderMyData() {
        fetch('http://34.71.56.116:8080/courses/' + this.state.year + '/' + this.state.term)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ courses: responseJson })
            })
            .catch((error) => {
                console.log("Error")
                console.error(error);
            });
    }
    render() {
        return (
            <List>
                {
                    this.state.courses && this.state.courses.map((course, idx) =>
                        <ListItem>
                            <ListItemText primaryTypographyProps={{ fontSize: '30px' }} key={(Math.random() + Math.random())} primary={course.id} />
                            <ListItemText primaryTypographyProps={{ fontSize: '30px' }} key={(Math.random() + Math.random())} primary={course.course_name} />
                            <ListItemText primaryTypographyProps={{ fontSize: '30px' }} key={(Math.random() + Math.random())} primary={course.professor} />
                            <ListItemText primaryTypographyProps={{ fontSize: '30px' }} key={(Math.random() + Math.random())} primary={course.days + " " + course.time} />
                            <ListItemText primaryTypographyProps={{ fontSize: '30px' }} key={(Math.random() + Math.random())} primary={course.term + " " + course.year} />
                            <ListItemButton>
                                <Button variant="contained" color="primary" onClick={() => handleClick(course.id)}> Register</Button>
                            </ListItemButton>
                        </ListItem>
                    )
                }
            </List >
        )
    }
}
