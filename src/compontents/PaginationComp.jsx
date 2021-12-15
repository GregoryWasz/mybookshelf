import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { Pagination } from "@mui/material";

function PaginationComp(props) {
    return (
        <Paper
            variant="outlined"
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                p: 0.5,
                position: "fixed",
                bottom: 0,
            }}
        >
            <Stack spacing={2}>
                <Pagination
                    onChange={(e, value) => {
                        props.handlePagination(value);
                    }}
                    count={Math.ceil(
                        props.booksDatabase.length / props.paginationValue,
                    )}
                    page={props.page}
                />
            </Stack>
        </Paper>
    );
}

export default PaginationComp;
