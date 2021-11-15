import React from "react";
import AppBar from "@mui/material/AppBar";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import Typography from "@mui/material/Typography";
import { IconButton, Toolbar } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function Header(props) {
    function handleShowAddForm(e) {
        e.preventDefault();
        if (props.isVisible === true) {
            props.onClick(false);
        } else {
            props.onClick(true);
        }
    }
    return (
        <AppBar position="relative">
            <Toolbar
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <MenuBookOutlinedIcon sx={{ mr: 2 }} />
                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    My Bookshelf
                </Typography>

                <IconButton
                    sx={{ color: "white" }}
                    edge="end"
                    onClick={handleShowAddForm}
                >
                    {props.isVisible ? (
                        <>
                            <CloseOutlinedIcon />
                        </>
                    ) : (
                        <>
                            <AddOutlinedIcon />
                            <Typography> Add Book</Typography>
                        </>
                    )}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
