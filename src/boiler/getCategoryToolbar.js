import React from 'react';

import Axios from 'axios';
import TextTruncate from 'react-text-truncate';
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));



const classes = useStyles();


export default class CategoryList extends React.Component {
    state = {
        meals: []
    }

    componentDidMount() {
        Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            .then(res => {
                console.log((res.data.meals))
                const meals = res.data.meals;
                this.setState({ meals });
            })
    }

    render() {
        return (
            <div>
                {this.state.meals.map(category => <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>

                    <Link
                        color="inherit"
                        noWrap
                        key={category.strCategory}
                        variant="body2"
                        href={category.strCategory}
                        className={classes.toolbarLink}
                    >
                        {category.strCategory}
                    </Link>

                </Toolbar>)}
            </div>
        )
    }
}
