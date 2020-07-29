import React, {useEffect, useState} from 'react';

import Axios from 'axios';
import Loading from "../boiler/loading";

const MealItem = ({MealId}) => {

    const [i, seti] = useState(0);
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorCode, setErrorCode] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=` + MealId.url.substring(6));
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
                        instructions: mealData.strInstructions ? mealData.strInstructions.split("\r\n") : [],
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
                    meals.push(meal);
                })
            }else {
                setError(true);
                setErrorCode('Error 418');
            }


            setMeals(meals);
            setLoading(false);

        }
        fetchPosts();
    }, []);

    const ingredients = [];
    const steps = [];

    meals.forEach((mealData, index) => {
        if (Number(MealId.url.substring(6)) === Number(mealData.id)) {
            mealData.ingredients.forEach(function (item, index) {
                if (item.item && item.measurement) {
                    ingredients.push(
                        <tr key={item.item + toString(index)}>
                            <td>{item.item}</td>
                            <td>{item.measurement}</td>
                        </tr>
                    )
                }
            });
        }

        const i = 0;

        mealData.instructions.forEach(function (instruction) {

            steps.push(
                <li key={instruction.substring(2)}>
                    {instruction}
                </li>
            )
        })
    });


    if (loading) {
        return <Loading />;
    }else if (error) {
        return <h2>{errorCode}</h2>;
    }else {
        return (
            <section>
                {meals.map(meal => <div className="mealItem" key={meal.id}>
                    <img src={meal.thumbnail} alt={meal.name}/>
                    <div className="desc">
                        <h2>{meal.name}</h2>
                        <h3>Region: {meal.area}<br/>Category: {meal.category}</h3>

                        <table>
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Measurement</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ingredients}
                            </tbody>

                        </table>

                        <p><span><b>Instructions</b></span><br/><ol>{steps}</ol></p>

                    </div>
                </div>)}
            </section>
        )
    }
}
export default MealItem;
