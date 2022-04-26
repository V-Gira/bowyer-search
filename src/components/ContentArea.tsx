import { Grid, Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PackageCard } from "./PackageCard";
import axios from "axios";

export const ContentArea: React.FC<{}> = (props) => {

    const [input, setInput] = React.useState({
        search: "",
        query: "",
    });
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const KEY = process.env.REACT_APP_API_KEY
    
    const queryAPI = async (query: string) => {
        console.log("hi")
        setLoading(true)
        try{
            const response = await axios.get(`https://libraries.io/api/search?q=${query}&sort=stars&api_key=${KEY}`)
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
        console.log(data)
        
        
    }
    
    const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [prop]: event.target.value });
    };

    useEffect(() => {
        queryAPI(input.query)
      }, []);

    return (
        <Box m={3}>
            <form  onSubmit={handleSubmit}>
                <TextField fullWidth label="Search..." value={input.query} onChange={handleChange("query")} />
            </form>
            <Grid container spacing={7} mt={0}>
                    {data? data.map((item: any) => (
                        <PackageCard description={item.description} user={item.name} stars={item.stars} key={item.latest_release_published_at} />
                    )) : "nothing"}
            </Grid>
        </Box>
    )
}

