import { Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

export const PackageCard: React.FC<{
   name: string;
    description: string;
   homepage: string;
    owner: string;
    stars: number;
}> = (props) => {
    return (
        <Grid item xs={12}>
            <Paper>
            <Grid container p={1}>
                <Grid item xs={8}>
                    <Typography variant="body1">{props.name}</Typography>
                    <Typography variant="body1">{props.homepage}</Typography>
                    <Typography variant="body1">{props.description}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="body1">{props.owner}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="body1">{props.stars}</Typography>
                </Grid>
            </Grid>
            </Paper>
        </Grid>
        
    )
}