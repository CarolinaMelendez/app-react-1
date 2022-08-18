import React  from "react";
import {Card,CardMedia, CardContent,Typography} from '@material-ui/core';
import {withStyles } from '@material-ui/core/styles'



function CardChild( {nameChild, classes, imageUrl}){
    return(
        <Card className={classes.item} >
            <CardMedia className={classes.media}  image={imageUrl} />
            <CardContent>
                <Typography component="p" variant="h7">{nameChild}</Typography>
            </CardContent>
        </Card>
    )
}

export default withStyles({
    item:{
        minWidth : "200px",
        margin: "1em",
        boxSizing: "border-box"
    },
    media:{
        minHeight: "150px"
    }
}) (CardChild);
