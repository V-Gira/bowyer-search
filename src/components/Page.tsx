import React, { useState } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { Header } from "./Header";
import { Container, Grid } from "@mui/material";
import { Sidebar } from "./Sidebar";
import { ContentArea } from "./ContentArea";

export const Page: React.FC<{}> = (props) => {
    const theme = useTheme();

    return (
        <div>
            <Header />
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={3}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={9}>
                        <ContentArea />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}