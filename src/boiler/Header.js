import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchBox from "../search/SearchBox";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Axios from 'axios';
// import CategoryList from "./getCategoryToolbar";
import GoBack from "./header/back";

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));



export default function Header(props) {
    const classes = useStyles();
    const { title } = props;

    const sections = [
        { title: 'Technology', url: '#' },
        { title: 'Design', url: '#' },
        { title: 'Culture', url: '#' },
        { title: 'Business', url: '#' },
        { title: 'Politics', url: '#' },
        { title: 'Opinion', url: '#' },
        { title: 'Science', url: '#' },
        { title: 'Health', url: '#' },
        { title: 'Style', url: '#' },
        { title: 'Travel', url: '#' },
    ]

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <GoBack />
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    <Link href="/">{title}</Link>
                </Typography>
                {/*<IconButton>*/}
                    <SearchBox />
                {/*</IconButton>*/}
            </Toolbar>
            {/*<CategoryList />*/}
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};