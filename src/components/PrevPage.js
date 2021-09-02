const PrevPage = ({page, setPage}) => {
    if(page === 1) return null;
    return (
        <button className="pageControlbutton" onClick={(() => {
            setPage((currentPage) => {
                return currentPage - 1;
            })
        })}>Previous</button>
    )
}

export default PrevPage;