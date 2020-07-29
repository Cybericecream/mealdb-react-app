import React, {Component} from 'react';
import Header from "../boiler/Header";
import GetSearch from "./getSearch";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';
import {Switch} from "@material-ui/core";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {search: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({search: event.target.value});
    }

    handleSubmit(event) {
        window.location.replace("/search/" + this.state.search.toLowerCase());
        event.preventDefault();
    }

    render() {

        return (
            <React.Fragment>

                <Container maxWidth="xl">
                    <Typography component="div">

                        <GetSearch SearchPhrase={this.props.match}/>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    }
}

export default Search;
