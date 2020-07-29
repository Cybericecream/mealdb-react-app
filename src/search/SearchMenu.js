import React, {useEffect, useState} from 'react';
import StickyBox from "react-sticky-box/dist/esnext";
import Select from 'react-select';

const SearchMenu = ({ categoryOptions, searchSubmit, changeCategories, searchTerm }) => {

    const [tempSearch, setTempSearch] = useState(searchTerm);

    useEffect(() => {

    },[]);

    const onChangeNewTerm = (event) => {
        setTempSearch(event.currentTarget.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        searchSubmit(tempSearch);
    }

    return (
        <section className="searchLeft">
            <StickyBox offsetTop={20} offsetBottom={20}>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="search" value={tempSearch} onChange={onChangeNewTerm}/>
                    </label>
                    <label>
                        <Select className="select" options={categoryOptions} placeholder={'Category'} onChange={changeCategories} />
                    </label>
                    <input className="submit" type={'submit'} value={'Search'}/>
                </form>
            </StickyBox>
        </section>

    )

}

export default SearchMenu;

