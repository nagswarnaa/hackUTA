import React, { Component } from 'react';
import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions
} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

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
    return (
        <Box className={classes.root}>
            <Card>
                <CardContent>
                    <Typography variant="h3">{props.course.course_name}</Typography>
                    <Typography variant="h5">{props.course.professor}</Typography>
                    <Typography variant="h6">{props.course.days + " " + props.course.time}</Typography>
                    <Typography variant="h6">{props.course.term + " " + props.course.year}</Typography>
                </CardContent>
            </Card>
        </Box >
    );
}

export default DisplayCard;