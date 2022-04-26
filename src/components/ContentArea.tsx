import { Grid, Box, TextField, CircularProgress, Stack, Pagination } from "@mui/material";
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
    const [page, setPage] = React.useState(1)
    // const KEY = process.env.REACT_APP_API_KEY

    const _DATA = usePagination(data, 5)
    
    const queryAPI = async (query: string) => {
        console.log("hi")
        // const url = `https://libraries.io/api/search?q=${query}&sort=stars&platforms=bower&per_page=100&api_key=${KEY}`
        const url = `https://libraries.io/api/bower-search?q=${query}&sort=stars&per_page=100`
        setLoading(true)
        try{
            const response = await axios.get(url)
            setData(response.data);
            setError(null);
        } catch (err: any) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        queryAPI(input.query)
        console.log(data.length)
    }
    
    const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [prop]: event.target.value });
    };

    const getOwner = (url: string) => {
        let owner = url.substring(19)
        owner = owner.substring(0, owner.indexOf("/"))
        return owner
    }

    const handleChangePage = (event:any, newPage:any) => {
        setPage(newPage);
        _DATA.jump(newPage)
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
                            count={Math.ceil(data.length / 5)} 
                            page={page}
                            onChange={handleChangePage}
                            /> 
                    </Stack>
                </Grid>
                    {(data.length !== 0)? _DATA.currentData().map((item: any) => (
                        <PackageCard name={item.name} homepage={item.homepage} description={item.description} owner={getOwner(item.repository_url)} stars={item.stars} key={uuidv4()} />
                    )) : 
                    <Grid container item xs={12} justifyContent={"center"}>
                        <CircularProgress />
                    </Grid>
                    }

            </Grid>
        </Box>
    )
}

