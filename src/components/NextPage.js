const NextPage = ({setPage}) => {

    return (
        <button className="pageControlButton" onClick={(() => {
            setPage((currentPage) => {
                return currentPage + 1;
            })
        })}>Next</button>
    )
}

export default NextPage;