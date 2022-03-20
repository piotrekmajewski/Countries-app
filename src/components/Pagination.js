import React from "react";

const PaginationComponent = ({ active, setActive, pagesAmount }) => {
    let items = [];

    for (let number = active - 2; number <= active + 2; number++) {
        if (isNumberValid(number, pagesAmount)) {
            items.push(
                <div className="pagination-item"
                    onClick={() => setActive(number)}
                    key={number}
                    active={number === active}
                >
                    {number}
                </div>,
            )
        }
    }

    function isNumberValid(number, pagesAmount) {
        return number > 0 && number < pagesAmount;
    }

    function getPreviousNumber(currentPage, pagesAmount) {
        if (currentPage > 0 && currentPage < pagesAmount)
            return currentPage < pagesAmount - 1 ? currentPage - 1 : currentPage;
        else if (!(currentPage < pagesAmount)) return pagesAmount;
        else return 0;
    }

    return (
        <div className="pagination_container">
            <div className="pagination">
                <div className="pgn-first" onClick={() => setActive(1)} />
                <div className="pgn-prev" onClick={() => active > 1 && setActive((currentPage) => {
                    return getPreviousNumber(currentPage, pagesAmount);
                })} />
                {items}
                <div className="pgn-next" onClick={() => setActive((a) => {
                    return a < pagesAmount - 1 ? a + 1 : a;
                })} />
                <div className="pgn-last" onClick={() => active < pagesAmount - 1 && setActive(pagesAmount - 1)} />
            </div>
        </div>
    )
}
export default PaginationComponent;