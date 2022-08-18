import { Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import CardChild  from "./CardChild";

function ChildrenList(){
    let childrenData = {
        ninos: ["Mauricio","Dilan","Daniela","Carmen","Juan"],
        imagesUrl : [
            "https://bit.ly/3Qz1NKB",
            "https://bit.ly/3QPCxiS",
            "https://bit.ly/3T1qqkw",
            "https://bit.ly/3wfFGki",
            "https://bit.ly/3wbXCfs"
        ]
    }
    return(
        <Fragment>
            <h1>Lista de los niños</h1>
            <h1>Se actualizo mensaje</h1>
            <Grid container spacing={24} justify="center" >
                {childrenData.ninos.map((nino,index) => {
                    return <CardChild nameChild={nino} imageUrl={childrenData.imagesUrl[index]}/>
                }) }
            </Grid>
        </Fragment>
    )
}
export default ChildrenList;