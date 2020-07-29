import React, {useEffect, useState} from 'react';
import SearchItem from "./searchItem";

import Axios from 'axios';
import Pagination from "../pagination/pagination";
import SearchMenu from "./SearchMenu";
import TextTruncate from "react-text-truncate";


const GetSearch = ({ SearchPhrase }) => {

    const [listElement, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setNumberOfLinks] = useState(16);
    const [meals, setMeals] = useState([])
    const [searchTerm, setSearchTerm] = useState(SearchPhrase.url.substring(8));
    const [error, setError] = useState(false);
    const [errorCode, setErrorCode] = useState('');
    const [categories, setCategories] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState( {value:undefined, label:undefined});

    useEffect(() => {

        const fetchPosts = async () => {
            setLoading(true);
            const res = await Axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchTerm);
            let meals = [];

            if(res && res.data && res.data.meals) {
                setError(false);

                res.data.meals.forEach((mealData, index) => {
                    let meal = {
                        id: mealData.idMeal,
                        name: mealData.strMeal,
                        drink: mealData.strDrinkAlternate,
                        category: mealData.strCategory,
                        area: mealData.strArea,
                        thumbnail: mealData.strMealThumb,
                        videoLink: mealData.strYoutube,
                        ingredients: [],
                        instructions: mealData.strInstructions,
                        tags: mealData.strTags ? mealData.strTags.split(',') : [],
                    };

                    for (var prop in mealData) {
                        if (prop.toString().includes("strIngredient")) {
                            const ingredientNumber = prop.toString().substring(13);
                            const measurement = mealData[`strMeasure${ingredientNumber}`];
                            const ingredient = mealData[prop];
                            if (measurement && ingredient) {
                                meal.ingredients.push({
                                    measurement,
                                    item: mealData[prop],
                                })
                            }
                        }
                    }
                    // eslint-disable-next-line eqeqeq
                    if(selectedCategory.value !== undefined){
                        if(selectedCategory.value === meal.category){
                            meals.push(meal);
                        }else {
                            setError(true);
                            setErrorCode('Error 418');
                        }

                    }else {
                        meals.push(meal);
                    }
                })
            }else {
                setError(true);
                setErrorCode('Error 418');
            }

            setPosts(meals);
            setLoading(false);

        }

        const getCategories = async () => {
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


        getCategories();

        fetchPosts();
    },[searchTerm, selectedCategory]);

    const handleSearch = (searchValue) => {
        if(searchValue !== false) {
            setSearchTerm(searchValue);
        }
    }

    const categoryDropdownOptions = () => {

        const output = [{value: "", label: "All"}];
        categories.forEach((categories) => {
            output.push({ value: categories.name, label: categories.name })
        })
        return output;

    }

    // const categoryDropdownOptions = [
    //     { value: 'Beef', label: 'Beef' },
    //     { value: 'Chicken', label: 'Chicken' },
    // ]

    const onChangeCategory = (categoryOption) => {
        setSelectedCategory(categoryOption);
    }

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
                <SearchMenu searchTerm={searchTerm} searchSubmit={handleSearch} changeCategories={onChangeCategory} categoryOptions={categoriesData ? categoryDropdownOptions() : []} />
                <section className="searchRight">
                    <SearchItem listElement={currentPosts} loading={loading} checkCategory={selectedCategory}/>
                    <Pagination postsPerPage={postsPerPage} totalPosts={listElement.length} paginate={paginate} currentPage={currentPage} changeLink={onChangeNewNumber} />
                </section>
            </section>
        )

}

export default GetSearch;

