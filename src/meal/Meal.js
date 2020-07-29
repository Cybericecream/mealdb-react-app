import React, {Component} from 'react';
import Header from "../boiler/Header";
import MealItem from "./getMeal";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';
import {Switch} from "@material-ui/core";

class Meal extends Component {
    render() {

        return (
            <div>
                <React.Fragment>
                    <Container maxWidth="xl">
                        <Typography component="div">
                            <MealItem MealId={this.props.match}/>
                        </Typography>
                    </Container>
                </React.Fragment>
            </div>
        )
    }
}

export default Meal;
