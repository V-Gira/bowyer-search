import { Grid, Link } from "@mui/material";
import React from "react";

export const Sidebar = () => {
    return (
    <Grid container direction={"column"}>
        <Grid item><Link href="" underline="hover" variant="h6">Home</Link></Grid>
        <Grid item><Link href="" underline="hover" variant="h6">Creating Packages</Link></Grid>
        <Grid item><Link href="" underline="hover" variant="h6">API</Link></Grid>
        <Grid item><Link href="" underline="hover" variant="h6">Configuration</Link></Grid>
        <Grid item><Link href="" underline="hover" variant="h6">Pluggable Resolvers</Link></Grid>
        <Grid item><Link href="" underline="hover" variant="h6">Tools</Link></Grid>
        <Grid item><Link href="" underline="hover" variant="h6">About</Link></Grid>
    </Grid>
    )
}