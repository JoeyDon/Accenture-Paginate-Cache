import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SpacingGrid(props) {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const { currentPage, onNextPage, onPreviousPage } = props;

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    <Grid item>
                        <Button onClick={onPreviousPage}>Back</Button>
                    </Grid>
                    <Grid item>
                        Page {currentPage} of 30
                    </Grid>
                    <Grid item>
                        <Button onClick={() => onNextPage(currentPage)}>Next</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}