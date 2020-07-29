import React, {useEffect, useState} from 'react';

import Axios from 'axios';
import Loading from "../boiler/loading";
import TextTruncate from 'react-text-truncate';
import GetSearch from "../search/getSearch";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";

const GetCategory = ({MealId}) => {

    const [i, seti] = useState(0);
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorCode, setErrorCode] = useState('');

    useEffect(() => {

        const fetchPosts = async () => {
            const result = await Axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);

            if (result && result.data && result.data.categories) {
                setError(false);

                const categoriesData = []
                result.data.categories.forEach((catData, index) => {
                    categoriesData.push({
                        id: catData.idCategory,
                        name: catData.strCategory,
                    })
                })
                setCategories(categoriesData);
            } else {
                setError(true);
                setErrorCode('Error 418');
            }
        }

        const categoryElements = () => {

            const output = [{value: "", label: "All"}];
            categories.forEach((categories) => {
                output.push(<Link
                    color="inherit"
                    noWrap
                    key={categories.id}
                    variant="body2"
                    href={categories.name}
                    className={classes.toolbarLink}
                >
                    {categories.name}
                </Link>)
            })
            // return output;

        }

        fetchPosts();
        categoryElements();
    },[]);

    if (loading) {
        return <Loading />;
    }else if (error) {
        return <h2>{errorCode}</h2>;
    }else {
        return (
            <section>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>

                    {categoryElements}

                </Toolbar>
            </section>
        )
    }
}
export default GetCategory;
