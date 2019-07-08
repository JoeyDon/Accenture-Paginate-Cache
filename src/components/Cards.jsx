import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './Card'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid(props) {
    const classes = useStyles();
    const {items} = props;
    console.log(items)
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                { items.length > 5 && items.map(item => {
                    <Card />
                })}
            </Grid>
        </div>
    );
}