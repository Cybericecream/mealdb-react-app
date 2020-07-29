import React, { useState, useEffect } from 'react';

import Axios from 'axios';
import TextTruncate from 'react-text-truncate';
import MealListElement from "./mealListElement";
import Pagination from "../pagination/pagination";

const MealList = () => {

    const [listElement, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setNumberOfLinks] = useState(16);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await Axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            setPosts(res.data.meals);
            setLoading(false);
        }
        fetchPosts();
    },[]);

    const onChangeNewNumber = (exampleValue) => {
        setNumberOfLinks(exampleValue.value);
    }

    // get Current Post
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = listElement.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

        return (
            <section>
                <MealListElement listElement={currentPosts} loading={loading} />
                <Pagination postsPerPage={postsPerPage} totalPosts={listElement.length} paginate={paginate} currentPage={currentPage} changeLink={onChangeNewNumber} />
            </section>
        )
    }

export default MealList;
