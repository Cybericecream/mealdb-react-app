import React from 'react';
import TextTruncate from "react-text-truncate";
import Loading from "../boiler/loading";

const SearchItem = ({ listElement, loading, checkCategory }) => {
    if(loading) {
        return <Loading />;
    }

        return (
            <React.Fragment>
                {listElement && listElement.map(meal => (<a href={'/meal/' + meal.id}><div className="mealsSearch" key={meal.id}>
                    <img src={meal.thumbnail} alt={"meal image"}/>
                    <div className="desc" >
                        <h3>{meal.name}</h3>
                        <TextTruncate
                            line={2}
                            element="span"
                            truncateText="…"
                            text={meal.instructions}
                        />
                        <div className="link">
                            <a href={`/meal/${meal.id}`}>View Recipe</a>
                        </div>
                    </div>

                </div></a>))}
            </React.Fragment>
        )
}

export default SearchItem;