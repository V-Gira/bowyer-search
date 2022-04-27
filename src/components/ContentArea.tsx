import { Grid, Box, TextField, CircularProgress, Stack, Pagination, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PackageCard } from "./PackageCard";
import axios from "axios";
import usePagination from "../hooks/usePagination";
const { v4: uuidv4 } = require('uuid');


export const ContentArea: React.FC<{}> = (props) => {

    const [input, setInput] = React.useState({
        search: "",
        query: "",
    });
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const perPage = 5;

    // the API I started using requires a key, for the record, I am aware that hosting a key on github secret for a React app is
    // not secure, and that best practice would require an express server to make the query (any server, you get my drift)
    // const KEY = process.env.REACT_APP_API_KEY

    const packages = usePagination(data, perPage)
    
    const queryAPI = async (query: string) => {
        // const url = `https://libraries.io/api/search?q=${query}&sort=stars&platforms=bower&per_page=100&api_key=${KEY}`
        const url = `https://libraries.io/api/bower-search?q=${query}&sort=stars&per_page=100`
        setLoading(true)
        console.log("Fetching data")
        try{
            const response = await axios.get(url)
            setData(response.data);
            setError(null);
        } catch (err: any) {
            setError(err.message);
            setData(null);
        } finally {
            console.log("Data fetched")
            setLoading(false);
            setPage(1)
            packages.jump(1)
        }
    };

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        queryAPI(input.query)
    }
    
    const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [prop]: event.target.value });
    };

    const getOwner = (url: string) => {                     // returns the owner from a Github url
        let owner = url.substring(19)
        owner = owner.substring(0, owner.indexOf("/"))
        return owner
    }

    const handleChangePage = (event:any, newPage:number) => {
        setPage(newPage);
        packages.jump(newPage)
      };

    useEffect(() => {
        queryAPI(input.query)
      }, []);

    return (
        <Box m={3}>
            <form  onSubmit={handleSubmit}>
                <TextField fullWidth label="Search..." value={input.query} onChange={handleChange("query")} />
            </form>
            <Grid container spacing={3} mt={0}>
                <Grid container item xs={12} justifyContent={"center"}>
                    <Stack>
                        <Pagination 
                            showFirstButton 
                            showLastButton 
                            shape="rounded" 
                            variant="outlined" 
                            count={Math.ceil(data.length / perPage)} 
                            page={page}
                            onChange={handleChangePage}
                            /> 
                    </Stack>
                </Grid>
                    <Grid item xs={12} container>
                        <Grid container p={1}>
                            <Grid item xs={8}>
                                <Typography variant="h6" color={"primary"}>Package</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h6" color={"primary"}>Owner</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="h6" color={"primary"}>Stars</Typography>
                            </Grid>
                            <Grid item xs={12} mt={1}>
                                <Divider />
                            </Grid>
                        </Grid>
                    </Grid>
                {(data.length !== 0)? packages.currentData().map((item: any) => (
                    <PackageCard name={item.name} homepage={item.homepage} description={item.description} owner={getOwner(item.repository_url)} stars={item.stars} key={uuidv4()} />
                )) : 
                <Grid container item xs={12} justifyContent={"center"}>
                    <CircularProgress />
                </Grid>
                }
                <Grid container item xs={12} justifyContent={"center"}>
                    <Stack>
                        <Pagination 
                            showFirstButton 
                            showLastButton 
                            shape="rounded" 
                            variant="outlined" 
                            count={Math.ceil(data.length / perPage)} 
                            page={page}
                            onChange={handleChangePage}
                            /> 
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

