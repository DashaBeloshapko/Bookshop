import './Books.css'
import { useEffect } from "react"
import { Book } from "./Book/Book"
import { useDispatch, useSelector } from "react-redux"
import { loadBooks } from "../../redux/actionCreators/bookActionCreators"
import { IStoreStateBooks } from "../../types"


// const getBooksByGrids = (books: IBook[]) => {
//     const newArr = []
//     for (let i = 0; i < books.length; i = i + 12) {
//         newArr.push([books[i], books[i + 1], books[i + 2], books[i + 3], books[i + 4], books[i + 5], books[i + 6], books[i + 7], books[i + 8], books[i + 9], books[i + 10], books[i + 11]].filter(el => !!el))
//     }
//     return newArr
// }

const Books = () => {
    const dispatch = useDispatch()

    const limit = useSelector((state: IStoreStateBooks) => state.books.limit)

    const books = useSelector((state: IStoreStateBooks) => state.books.books)

    useEffect(() => {
        dispatch(loadBooks({ limit }))
    }, [limit])

    return (
        <div className="books_main-wrap">
            <h1 className="books_main-title">New Releases Books</h1>
            <div className="books_wrap">
                {books.map((el) => <Book image={el.image} title={el.title} subtitle={el.subtitle} price={el.price} isbn13={el.isbn13} />)}
            </div>
        </div>
    )
}

export { Books }