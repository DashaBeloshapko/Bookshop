import { useDispatch, useSelector } from "react-redux"
import { IBook, IStoreStateBooks } from "../../types"
import { useEffect } from "react"
import { loadBooks } from "../../redux/actionCreators"
import { Book } from "../Books"
import './SearchResults.css'
import { useParams } from "react-router-dom"

const SearchResults = () => {
    const books = useSelector((state: IStoreStateBooks) => state.books.books)
    const limit = useSelector((state: IStoreStateBooks) => state.books.limit)
    const currentPage = useSelector((state: IStoreStateBooks) => state.books.currentPage)
    const search = new URLSearchParams(window.location.search)

    const dispatch = useDispatch()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        dispatch(loadBooks({ limit, currentPage, search: params.get('search') }))
    }, [limit])

    return (
        <div className="searchresults">
            <h1 className="searchresults-title">{`"${search.get('search')}" search results`}</h1>
            <span className="searchresults-span">{`Found ${books.length} books`}</span>
            <div className="searchres-wrap">
                {
                    books.map((el) =>
                        <Book image={el.image} title={el.title} subtitle={el.subtitle} price={el.price} isbn13={el.isbn13} />)
                }
            </div>
        </div>
    )
}

export { SearchResults }