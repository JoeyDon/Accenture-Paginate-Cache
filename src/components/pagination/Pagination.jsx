import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Snackbar from '../snackbar/snackbar'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },

    close: {
        padding: theme.spacing(0.5),
    },
}));

export default function SpacingGrid(props) {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const { currentPage, onNextPage, onPreviousPage, lastpageIndex } = props;

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    
                    <Grid item>
                        <Button onClick={onPreviousPage}>Back</Button>
                    </Grid>
                    
                    <Grid item>
                        Page {currentPage} of {lastpageIndex}
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