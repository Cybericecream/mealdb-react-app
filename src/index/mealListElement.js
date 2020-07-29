import React from 'react';
import TextTruncate from "react-text-truncate";
import Loading from "../boiler/loading";

const MealListElement = ({ listElement, loading }) => {
    if(loading) {
        return <Loading />;
    }
    console.log(listElement,"List Element")
    return (
        <React.Fragment>
            {listElement && listElement.map(meal => (<a href={'/meal/' + meal.idMeal}><div className="meals" key={meal.idMeal}>
                <img src={meal.strMealThumb}/>
                <div className="desc" >
                    <h3>{meal.strMeal}</h3>
                    <TextTruncate
                        line={2}
                        element="span"
                        truncateText="…"
                        text={meal.strInstructions}
                        textTruncateChild={<a href={'/meal/' + meal.idMeal} >Read on</a>}
                    />
                </div>
                <div className="link">
                    <a href={'/meal/' + meal.idMeal}>View Recipe</a>
                </div>
            </div></a>))}
        </React.Fragment>
    )
}

export default MealListElement;