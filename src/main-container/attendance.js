import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export default class Attendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: localStorage.getItem("courseId"),
            year: localStorage.getItem("selectedYear"),
            term: localStorage.getItem("selectedTerm"),
            Attendance: null
        };
    }
    componentWillMount() {
        this.renderMyData();
    }
    renderMyData() {
        fetch('http://34.71.56.116:8080/attendance/1/1/2021/Spring')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ Attendance: responseJson })
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
                    this.state.Attendance && this.state.Attendance.map((course, idx) =>
                        <ListItem>
                            <ListItemText primaryTypographyProps={{ fontSize: '30px' }} key={(Math.random() + Math.random())} primary={course.courseId} />
                            <ListItemText primaryTypographyProps={{ fontSize: '30px' }} key={(Math.random() + Math.random())} primary={course.course_name} />
                            <ListItemText primaryTypographyProps={{ fontSize: '30px' }} key={(Math.random() + Math.random())} primary={course.date} />
                            <ListItemText primaryTypographyProps={{ fontSize: '30px' }} key={(Math.random() + Math.random())} primary={course.present === true ? "Present" : "Absent"} />
                            <ListItemText primaryTypographyProps={{ fontSize: '30px' }} key={(Math.random() + Math.random())} primary={course.term + " " + course.year} />
                        </ListItem>
                    )
                }
            </List >
        );
    }
}
