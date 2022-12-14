import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="https://bit.ly/3AuRfXd" />
                        </ButtonBase>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography gutterBottom variant="subtitle1">
                Nombre
                        </Typography>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    );
}
