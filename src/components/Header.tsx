import React from "react";
import { Container, Grid, Button, Typography, Box, Link } from "@mui/material";

export const Header = () => {

    return(
        <Box sx={{backgroundColor: "#ffcc2f",}}>
        <Container maxWidth="lg">
            <Grid container pt={1}>
                <Box sx={{ width: 192, height: 192 }}>
                    <img src="./logo512.png" alt="logo" width={192} />
                </Box>
                <Grid container item xs spacing={0}>
                    <Grid item xs={12} >
                        <Box display={"flex"} justifyContent={"flex-end"}>
                            <Button size="large" sx={{textTransform: "none", "&:hover":{backgroundColor: "white"}}}>Docs</Button>
                            <Button size="large" sx={{textTransform: "none", color: "#2baf2b", "&:hover":{backgroundColor: "white"}}}>Search packages</Button>
                            <Button size="large" sx={{textTransform: "none", color: "#2baf2b", "&:hover":{backgroundColor: "white"}}}>Blog</Button>
                            <Button size="large" sx={{textTransform: "none", color: "#2baf2b", "&:hover":{backgroundColor: "white"}}}>Stats</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2" color={"#543729"} fontWeight={"bold"}>Bowyer Search</Typography>
                    </Grid>
                    <Grid item xs={12} mt={-3}>
                        <Typography variant="h6">Powered by <Link href="https://libraries.io/" target="_blank" rel="noopener" underline="hover">libraries.io</Link></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        <Box sx={{backgroundColor: "#2188b6",}}>
            <Container maxWidth="lg">
                <Typography color={"white"} align="center">
                    ...psst! You can check out this page's repo <Link href="https://github.com/V-Gira/bowyer-search" target="_blank" rel="noopener" color={"#FFF"}>here</Link>, you can also take a look at my <Link href="https://singularity-app.netlify.app/" target="_blank" rel="noopener" color={"#FFF"}>VTT app</Link>, here's the <Link href="https://github.com/V-Gira/Singularity-App/" target="_blank" rel="noopener" color={"#FFF"}>repo</Link> for that too
                </Typography>
            </Container>
            
        </Box>
        </Box>
    )
}