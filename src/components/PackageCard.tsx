import { Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

export const PackageCard: React.FC<{
    name: string;
    description: string;
    homepage: string;
    owner: string;
    stars: number;
}> = (props) => {

    return (
        <Grid item xs={12}>
            <Paper variant="outlined" >
            <Grid container spacing={0} p={1}>
                <Grid item container spacing={1} xs={8}>
                    <Grid item xs={12}>
                        <Link href={props.homepage} target="_blank" rel="noopener" underline="hover" >
                            <Typography variant="h6">{props.name}</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link href={props.homepage} target="_blank" rel="noopener" underline="hover" >
                            {props.homepage}
                        </Link>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant="body1">{props.description}</Typography>
                    </Grid>
                    
                    
                    
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