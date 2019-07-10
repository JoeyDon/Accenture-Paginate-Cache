import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Snackbar from '../snackbar/snackbar'
const useStyles = makeStyles(theme => ({
    close: {
        padding: theme.spacing(0.5),
    },
    spanMargin:{
        fontSize:18,
        marginTop:5
    }
}));

export default function SpacingGrid(props) {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const { currentPage, onNextPage, onPreviousPage, lastpageIndex } = props;

    return (
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    
                    <Grid item>
                        <Button onClick={onPreviousPage}>Back</Button>
                    </Grid>
                    
                    <Grid item className={classes.spanMargin}>
                        <span >Page {currentPage} of {lastpageIndex}</span>
                    </Grid>

                    <Grid item>
                        <Button onClick={onNextPage}>Next</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Snackbar/>
        </Grid>
    );
}