import './Books.css'
import { useEffect } from "react"
import { Book } from "./Book/Book"
import { useDispatch, useSelector } from "react-redux"
import { loadBooks } from "../../redux/actionCreators/bookActionCreators"
import { IBook, IStoreStateBooks } from "../../types"
import { Pagination } from '../Pagination'

const Books = () => {
    const dispatch = useDispatch()

    const limit = useSelector((state: IStoreStateBooks) => state.books.limit)
    const books = useSelector((state: IStoreStateBooks) => state.books.books)
    const currentPage = useSelector((state: IStoreStateBooks) => state.books.currentPage)
    console.log(limit, currentPage, books.length)

    useEffect(() => {
        dispatch(loadBooks({ limit, currentPage }))
    }, [limit, currentPage])

    const getNewArr = (books: IBook[]) => {
        const newArr = []
        for (let i = currentPage - 1; i < currentPage - 1 + limit; i++) {
            newArr.push(books[i])
        }
        return (newArr.filter(el => !!el))
    }
    console.log(getNewArr(books))
    return (
        <div className="books_main-wrap">
            <h1 className="books_main-title">New Releases Books</h1>
            <div className="books_wrap">
                {getNewArr(books).map((el) => <Book image={el.image} title={el.title} subtitle={el.subtitle} price={el.price} isbn13={el.isbn13} />)}
            </div>
            <Pagination />
        </div>
    )
}

export { Books }