import React, { Component } from 'react';
import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActionArea
} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'inline-flex',
            flexDirection: 'row',
            textAlign: 'center',
            maxWidth: 500,
            "& > *": {
                margin: theme.spacing(3),
            },
        },
    })
);
function DisplayCard(props) {
    const classes = useStyles();
    let navigate = useNavigate();
    let { course } = props
    const handleClick = (id) => {
        localStorage.setItem("courseId", course.id)
        navigate("/attn")
    }
    return (
        <Box className={classes.root}>
            <Card>
                <CardActionArea onClick={(course) => handleClick(course)}>
                    <CardContent>
                        <Typography variant="h3">{course.course_name}</Typography>
                        <Typography variant="h5">{course.professor}</Typography>
                        <Typography variant="h6">{course.days + " " + props.course.time}</Typography>
                        <Typography variant="h6">{course.term + " " + props.course.year}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box >
    );
}

export default DisplayCard;