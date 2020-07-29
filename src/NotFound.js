import React from 'react';
import Header from "./boiler/Header";
import PersonList from "./index/get";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';
import {Switch} from "@material-ui/core";

function NotFound() {

    return (
        <React.Fragment>

            <Container maxWidth="xl">
                <Typography component="div" >
                    <h2>Error 404</h2>
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default NotFound;
