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
    {
        id: 1,
        img: "https://upolujebooka.pl/_data_cache/_data/offer/011/190_290_0_0_0_1_109592-pamiec_nieulotna.jpg",
        title: "Pamięć nieulotna",
        author: "Edward Snowden",
        description: "Nice",
        rating: 5,
        isFavourite: false,
    },
    {
        id: 2,
        img: "https://upolujebooka.pl/_data_cache/_data/offer/008/190_290_0_0_0_1_76241-innowatorzy_o_tym__jak_grupa_hakerow__geniuszy_i_geekow_wywolala_cyfrowa_rewolucje.jpg",
        title: "Innowatorzy. O tym, jak grupa hakerów, geniuszy i geeków wywołała cyfrową rewolucję",
        author: "Walter Isaacson",
        description: "Wow!",
        rating: 5,
        isFavourite: false,
    },
    {
        id: 3,
        img: "https://upolujebooka.pl/_data_cache/_data/offer/001/190_290_0_0_0_1_869-epsfhschmwktecgmhvmh-1.jpg",
        title: "Steve Jobs",
        author: "Walter Isaacson",
        description: "Preety",
        rating: 4,
        isFavourite: false,
    },
    {
        id: 4,
        img: "https://upolujebooka.pl/_data_cache/_data/offer/012/190_290_0_0_0_1_110638-the_science_of_rick_and_morty.jpg",
        title: "The Science of Rick and Morty: Nienaukowy przewodnik po świecie nauki ",
        author: "Tom Bardy",
        description: "Well done!",
        rating: 4,
        isFavourite: false,
    },
    {
        id: 5,
        img: "https://upolujebooka.pl/_data_cache/_data/offer/005/190_290_0_0_0_1_46002-nie_kaz_mi_myslec_o_zyciowym_podejsciu_do_funkcjonalnosci_stron_internetowych_wyda.jpg",
        title: "Nie każ mi myśleć! O życiowym podejściu do funkcjonalności stron internetowych. Wydanie III ",
        author: "Steve Krug",
        description: "Medium.",
        rating: 3,
        isFavourite: false,
    },
    {
        id: 6,
        img: "https://upolujebooka.pl/_data_cache/_data/offer/005/190_290_0_0_0_1_43732-krkccyfhrfqyfppnhvyv-1.jpg",
        title: "Duch w sieci: Moje przygody jako najbardziej poszukiwanego hakera wszech czasów",
        author: "Kevin Mitnick, William L. Simon, Steve Wozniak",
        description: "Best!",
        rating: 4,
        isFavourite: false,
    },
    {
        id: 7,
        img: "https://upolujebooka.pl/_data_cache/_data/offer/011/190_290_0_0_0_1_107751-docker_praktyczne_zastosowania_wydanie_ii_-_przedsprzedaz.jpg",
        title: "Docker. Praktyczne zastosowania. Wydanie II ",
        author: "Sean P. Kane, Karl Matthias",
        description: "Computer science rules!",
        rating: 5,
        isFavourite: false,
    },
    {
        id: 8,
        img: "https://upolujebooka.pl/_data_cache/_data/offer/010/190_290_0_0_0_1_97895-pan_raczy_zartowac__panie_feynman.jpg",
        title: "Pan raczy żartować, panie Feynman! Przypadki ciekawego człowieka",
        author: "Richard P. Feynman",
        description: "Super Cool!",
        rating: 5,
        isFavourite: false,
    },
    {
        id: 9,
        img: "https://upolujebooka.pl/_data_cache/_data/offer/009/190_290_0_0_0_1_86603-bron_matematycznej_zaglady.jpg",
        title: "Broń matematycznej zagłady",
        author: "Cathy O'Neil",
        description: "Interesting",
        rating: 4,
        isFavourite: false,
    },
];

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
        setBooks(
            booksDatabase
                .filter((book) => book.title.includes(title))
                .splice(0, 6),
        );
    }

    function handleIsFavourite(id) {
        const bookIndex = booksDatabase.findIndex((book) => book.id === id);
        if (booksDatabase[bookIndex].isFavourite === false) {
            booksDatabase[bookIndex].isFavourite = true;
        } else {
            booksDatabase[bookIndex].isFavourite = false;
        }
        handlePagination(page);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header onClick={setShowCreateForm} isVisible={showCreateForm} />
            <main>
                <MainText />
                <Search searchByTitle={searchByTitle} />
                <Container sx={{ py: 4 }} maxWidth="md">
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
                                isFavourite={book.isFavourite}
                                handleDeleteBook={handleDeleteBook}
                                handleEditBook={handleEditBook}
                                handleIsFavourite={handleIsFavourite}

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
