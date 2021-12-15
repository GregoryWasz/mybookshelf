import React from "react";
import { Container, Paper, TextField } from "@mui/material";

function Search(props) {
    return (
        <Container maxWidth="md">
            <Paper
                variant="outlined"
                sx={{
                    bgcolor: "white",
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                    mt: 4,
                }}
            >
                <TextField
                    onChange={(e) => props.searchByTitle(e.target.value)}
                    size="small"
                    label="Search"
                    id="Search"
                />
            </Paper>
        </Container>
    );
}

export default Search;
