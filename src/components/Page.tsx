import React from "react";
import { Header } from "./Header";
import { Container, Grid } from "@mui/material";
import { Sidebar } from "./Sidebar";
import { ContentArea } from "./ContentArea";
import { Footer } from "./Footer";

export const Page: React.FC<{}> = (props) => {

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
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}