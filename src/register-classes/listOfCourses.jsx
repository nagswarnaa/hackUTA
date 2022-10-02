import React, { Component } from 'react';
import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';


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
    handleClick(course) {
        let _data = {
            courseId: course,
            userId: 1
        };
        const requestOptions = {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(_data)
        };

        fetch('http://34.71.56.116:8080/courses/register', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data),
                window.location = '/'
            )
            .catch((error) => {
                console.log("Error")
                console.error(error);
            });

    }
    renderMyData() {
        fetch('https://hackutadev.herokuapp.com/courses/' + this.state.year + '/' + this.state.term)
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
                                <Button variant="contained" color="primary" onClick={(course) => this.handleClick(course.id)}> Register</Button>
                            </ListItemButton>
                        </ListItem>
                    )
                }
            </List >
        )
    }
}
