import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextField, Box } from "@mui/material";

export default function BookCard(props) {
    const [showDescription, setShowDescription] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");

    function handleDescription(e) {
        if (showDescription === true) {
            setShowDescription(false);
        } else {
            setShowDescription(true);
        }
    }

    function handleEdit(e) {
        if (showEdit === true) {
            setShowEdit(false);
        } else {
            setShowEdit(true);
        }
    }

    function handleEditButton(e) {
        e.preventDefault();
        if (image === "") {
            setImage(props.image);
        }
        if (title === "") {
            setTitle(props.title);
        }
        if (author === "") {
            setAuthor(props.author);
        }
        if (description === "") {
            setDescription(props.description);
        }
        if (rating === "") {
            setRating(props.rating);
        }

        props.editedBook({
            id: props.id,
            img: image,
            title: title,
            author: author,
            description: description,
            rating: rating,
        });
        setShowEdit(false);
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{
                    height: "100%",

                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <CardMedia component="img" image={props.img} alt="book cover" />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography paragraph sx={{ color: "Gray", fontSize: 10 }}>
                        {props.author}
                    </Typography>
                    <Typography
                        paragraph
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        {props.title}
                    </Typography>
                    <Typography>Rating: {props.rating}</Typography>
                    {showDescription && (
                        <Typography paragraph>
                            Description: {props.description}
                        </Typography>
                    )}
                </CardContent>
                {showEdit && (
                    <Box sx={{ mb: 2, p: 2 }}>
                        <Typography variant="h5" align="center">
                            Edit book
                        </Typography>
                        <Box component="form">
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
                                onClick={handleEditButton}
                                sx={{ mt: 2 }}
                                color="info"
                                variant="contained"
                                fullWidth
                                size="large"
                            >
                                Edit
                            </Button>
                        </Box>
                    </Box>
                )}
                <CardActions
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        onClick={handleDescription}
                        variant="outlined"
                        size="small"
                    >
                        More
                    </Button>
                    <Button
                        color="warning"
                        variant="outlined"
                        size="small"
                        onClick={() => handleEdit()}
                    >
                        Edit
                    </Button>
                    <Button
                        color="error"
                        variant="outlined"
                        size="small"
                        onClick={() => props.handleDeleteBook(props.id)}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
