import React from 'react';
import Select from 'react-select';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, changeLink }) => {
    const pageNumbers = [];
    const active = false;

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    const options = [
        { value: 4, label: '4' },
        { value: 8, label: '8' },
        { value: 16, label: '16' }
    ]

    return (
        <section className="pagination">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li onClick={() => paginate(number)} key={number} className={currentPage == number ? "active" : ""}>
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}

                <Select className="select" options={options} defaultValue={16} placeholder={16} onChange={changeLink} />

            </ul>
        </section>
    )
}

export default Pagination;