import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function BookCard(props) {
    const [showDescription, setShowDescription] = useState(false);
    function handleDescription(e) {
        if (showDescription === true) {
            setShowDescription(false);
        } else {
            setShowDescription(true);
        }
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
                    <Typography sx={{ color: "Gray", fontSize: 10 }}>
                        {props.author}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography>Rating: {props.rating} / 5</Typography>
                    {showDescription && (
                        <Typography>{props.description}</Typography>
                    )}
                </CardContent>
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
                    <Button color="warning" variant="outlined" size="small">
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
