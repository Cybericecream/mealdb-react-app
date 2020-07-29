import React, {useEffect, useState} from 'react';
import './SearchBox.css';

const SearchBox = ( ) => {

    const [search, setSearch] = useState('');

    useEffect( () => {

    })

    const handleChange = (event) => {
        setSearch( event.target.value );
    }

    const handleSubmit = (event) => {
        window.location.replace("/search/" + search.toLowerCase());
        event.preventDefault();
    }

        return(
            <React.Fragment>
                {/*<SearchIcon />*/}
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="search" value={search} onChange={handleChange} />
                    </label>
                </form>
            </React.Fragment>
        );

}
export default SearchBox;
