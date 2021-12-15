import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainText from "./MainText";
import Header from "./Header";
import BookCard from "./BookCard";
import BookForm from "./BookForm";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

const theme = createTheme({
    palette: {
        background: {
            default: "#f5f5f5",
        },
    },
});

var booksDatabase = [
    { id: 1, img: "a", title: 1, author: 1, description: 1, rating: 1 },
    { id: 2, img: "a", title: 2, author: 1, description: 1, rating: 1 },
    { id: 3, img: "a", title: 3, author: 1, description: 1, rating: 1 },
    { id: 4, img: "a", title: 4, author: 1, description: 1, rating: 1 },
    { id: 5, img: "a", title: 5, author: 1, description: 1, rating: 1 },
    { id: 6, img: "a", title: 6, author: 1, description: 1, rating: 1 },
    { id: 7, img: "a", title: 7, author: 1, description: 1, rating: 1 },
    { id: 8, img: "a", title: 8, author: 1, description: 1, rating: 1 },
    { id: 9, img: "a", title: 9, author: 1, description: 1, rating: 1 },
];

const paginationValue = 6;

export default function MainPage() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [books, setBooks] = useState(booksDatabase.slice(0, paginationValue));
    const [page, setPage] = useState(1);

    function handleAddBook(book) {
        booksDatabase.push(book);
    }

    function handleDeleteBook(id) {
        booksDatabase.splice(
            booksDatabase.findIndex((book) => book.id === id),
            1,
        );
        handlePagination(1);
    }
    function handleEditBook(editedBook) {
        const bookIndex = booksDatabase.findIndex(
            (book) => book.id === editedBook.id,
        );
        booksDatabase[bookIndex] = editedBook;
        handlePagination(1);
    }

    function handlePagination(value) {
        setPage(value);
        value -= 1;
        setBooks(
            booksDatabase.slice(
                value * paginationValue,
                value * paginationValue + paginationValue,
            ),
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header onClick={setShowCreateForm} isVisible={showCreateForm} />
            <main>
                <MainText />
                <Paper
                    variant="outlined"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        p: 0.5,
                        border: 0,
                    }}
                >
                    <Stack spacing={2}>
                        <Pagination
                            onChange={(e, value) => {
                                handlePagination(value);
                            }}
                            count={Math.ceil(
                                booksDatabase.length / paginationValue,
                            )}
                            page={page}
                        />
                    </Stack>
                </Paper>
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
                                handleEditBook={handleEditBook}
                            />
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}
