import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainText from "./MainText";
import Header from "./Header";
import BookCard from "./BookCard";
import BookForm from "./BookForm";
import PaginationComp from "./PaginationComp";
import Search from "./Search";
import { Box } from "@mui/system";

const theme = createTheme({
    palette: {
        background: {
            default: "#f5f5f5",
        },
    },
});

var booksDatabase = [];

const paginationValue = 6;

export default function MainPage() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [books, setBooks] = useState(booksDatabase.slice(0, paginationValue));
    const [page, setPage] = useState(1);

    function handleAddBook(book) {
        booksDatabase.push(book);
        handlePagination(Math.ceil(booksDatabase.length / paginationValue));
    }

    function handleDeleteBook(id) {
        booksDatabase.splice(
            booksDatabase.findIndex((book) => book.id === id),
            1,
        );
        if (Math.ceil(booksDatabase.length / paginationValue) < page) {
            handlePagination(1);
        } else {
            handlePagination(page);
        }
    }
    function handleEditBook(editedBook) {
        const bookIndex = booksDatabase.findIndex(
            (book) => book.id === editedBook.id,
        );
        booksDatabase[bookIndex] = editedBook;
        handlePagination(page);
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

    function searchByTitle(title) {
        console.log(title);
        setBooks(
            booksDatabase
                .filter((book) => book.title.includes(title))
                .splice(0, 6),
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header onClick={setShowCreateForm} isVisible={showCreateForm} />
            <main>
                <MainText />
                <Search searchByTitle={searchByTitle} />

                <Container sx={{ py: 4 }} maxWidth="md">
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

                <Box sx={{ mb: 4 }} />

                <PaginationComp
                    handlePagination={handlePagination}
                    booksDatabase={booksDatabase}
                    paginationValue={paginationValue}
                    page={page}
                />
            </main>
        </ThemeProvider>
    );
}
