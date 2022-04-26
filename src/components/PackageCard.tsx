import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";

export const PackageCard: React.FC<{
   // name: string;
    description: string;
  //  homepage: string;
    user: string;
    stars: number;
}> = (props) => {
    return (
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={8}>
                    <Typography variant="body1">{props.description}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body1">{props.user}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body1">{props.stars}</Typography>
                </Grid>
            </Grid>
        </Grid>
        
    )
}