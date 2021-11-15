import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function MainText() {
    return (
        <Box
            sx={{
                bgcolor: "background.paper",
                pt: 4,
                pb: 3,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    My bookshelf
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                >
                    My digital bookshelf for books which I readed, recomend or
                    hate.
                </Typography>
            </Container>
        </Box>
    );
}
