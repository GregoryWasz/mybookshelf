import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainText from "./MainText";
import Header from "./Header";
import BookCard from "./BookCard";
import BookForm from "./BookForm";

const theme = createTheme({
    palette: {
        background: {
            default: "#f5f5f5",
        },
    },
});

export default function MainPage() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [books, setBooks] = useState([]);

    function handleAddBook(book) {
        books.push(book);
    }

    function handleDeleteBook(id) {
        books.splice(
            books.findIndex((book) => book.id === id),
            1,
        );
        setBooks([...books]);
    }
    function handleEditBook(editedBook) {
        const bookIndex = books.findIndex((book) => book.id === editedBook.id);
        books[bookIndex] = editedBook;
        setBooks([...books]);
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
                                editedBook={handleEditBook}
                            />
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}
