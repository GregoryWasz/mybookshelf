import { Paper, TextField, Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";

export default function BookForm(props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");

    function handleAddBookForm() {
        props.book({
            id: Math.random().toString(36).substr(2, 9),
            img: image,
            title: title,
            author: author,
            description: description,
            rating: rating,
            isFavourite: false,
        });
        props.isVisible(false);
    }

    return (
        <Paper sx={{ mb: 2, p: 2 }}>
            <Typography variant="h4" align="center">
                Add book
            </Typography>
            <Box component="form" onSubmit={handleAddBookForm}>
                <TextField
                    sx={{ mt: 2 }}
                    autoComplete="title"
                    name="title"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                ></TextField>
                <TextField
                    sx={{ mt: 2 }}
                    autoComplete="author"
                    name="author"
                    required
                    fullWidth
                    id="author"
                    label="Author"
                    autoFocus
                    onChange={(e) => setAuthor(e.target.value)}
                ></TextField>
                <TextField
                    sx={{ mt: 2 }}
                    autoComplete="description"
                    name="description"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    autoFocus
                    onChange={(e) => setDescription(e.target.value)}
                ></TextField>
                <TextField
                    sx={{ mt: 2 }}
                    autoComplete="rating"
                    name="rating"
                    required
                    fullWidth
                    id="rating"
                    label="Rating"
                    type="number"
                    autoFocus
                    onChange={(e) => setRating(e.target.value)}
                ></TextField>
                <TextField
                    sx={{ mt: 2 }}
                    autoComplete="image"
                    name="image"
                    required
                    fullWidth
                    id="image"
                    label="Image"
                    autoFocus
                    onChange={(e) => setImage(e.target.value)}
                ></TextField>
                <Button
                    type="submit"
                    sx={{ mt: 2 }}
                    color="success"
                    variant="contained"
                    fullWidth
                    size="large"
                >
                    Submit
                </Button>
            </Box>
        </Paper>
    );
}
