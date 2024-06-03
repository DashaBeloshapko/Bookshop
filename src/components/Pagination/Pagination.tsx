import { useDispatch, useSelector } from 'react-redux'
import './Pagination.css'
import { IStoreStateBooks } from '../../types'
import { setCurrentPage } from '../../redux/actionCreators'

const Pagination = () => {
    const { currentPage, limit, books } = useSelector((state: IStoreStateBooks) => state.books)
    console.log(currentPage % limit)

    const dispatch = useDispatch()
    return (
        <div className="pagination-wrap">
            <button
                className="pagination-but"
                onClick={() => dispatch(setCurrentPage((currentPage - limit)))}
                disabled={currentPage === 1 ? true : false}>Prev</button>
            {currentPage === 1 ? 1 : ((currentPage - 1) / limit) + 1}
            <button
                className="pagination-but"
                onClick={() => dispatch(setCurrentPage((currentPage + limit)))}
                disabled={limit > (books.length - currentPage)}>Next</button>
        </div>
    )
}

export { Pagination }