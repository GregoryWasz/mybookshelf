import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainText from "./MainText";
import Header from "./Header";
import BookCard from "./BookCard";
import BookForm from "./BookForm";

const books = [
    {
        id: 1,
        img: "https://source.unsplash.com/random",
        title: "Apple pe el",
        author: "Kszekosz Paszkowski",
        description: "Fajna",
        rating: 2,
    },
    {
        id: 2,
        img: "https://ecsmedia.pl/c/cel-snajpera-historia-najniebezpieczniejszego-snajpera-w-dziejach-amerykanskiej-armii-b-iext87016367.jpg",
        title: "Cel snajpera",
        author: "wowowow",
        description: "SUPERANCK",
        rating: 5,
    },
];

const theme = createTheme({
    palette: {
        background: {
            default: "#f5f5f5",
        },
    },
});

export default function MainPage() {
    const [showCreateForm, setShowCreateForm] = useState(false);

    function handleAddBook(book) {
        books.push(book);
    }

    function handleDeleteBook(id) {
        console.log("i try to delete " + id);
        console.log(books.findIndex((book) => book.id === id));
        books.splice(
            books.findIndex((book) => book.id === id),
            1,
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header onClick={setShowCreateForm} isVisible={showCreateForm} />
            <main>
                <MainText />
                <Container sx={{ py: 8 }} maxWidth="md">
                    {showCreateForm && (
                        <BookForm
                            isVisible={setShowCreateForm}
                            book={handleAddBook}
                        />
                    )}
                    <Grid container spacing={4}>
                        {books.map((book) => (
                            <BookCard
                                key={book.id}
                                id={book.id}
                                img={book.img}
                                title={book.title}
                                author={book.author}
                                description={book.description}
                                rating={book.rating}
                                handleDeleteBook={handleDeleteBook}
                            />
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}
