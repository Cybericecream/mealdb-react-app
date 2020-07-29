import React, {Component} from 'react';
import Header from "./boiler/Header";
import MealList from "./index/get";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';
import {Switch} from "@material-ui/core";

class App extends Component{

    render() {

        return (
            <React.Fragment>

                <Container maxWidth="xl">
                    <Typography component="div">
                        <MealList/>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;
