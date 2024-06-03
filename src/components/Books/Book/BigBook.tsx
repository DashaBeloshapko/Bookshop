import { Link, useParams } from "react-router-dom"
import { Button } from "../../Button"
import { useDispatch, useSelector } from "react-redux"
import { ICart, ILIkeBook, IStoreStateBooks } from "../../../types"
import { useEffect, useState } from "react"
import { addToCart, likeBook, loadBigBook } from "../../../redux/actionCreators"

const BigBook = () => {
    const dispatch = useDispatch()
    const bigBook = useSelector((state: IStoreStateBooks) => state.books.bigBook)
    const allBooks = useSelector((state: IStoreStateBooks) => state.books.books)
    console.log(allBooks)
    const { isbn13 = '' } = useParams();
    const index = allBooks.findIndex(el => el.isbn13 === bigBook.isbn13)
    console.log(bigBook.isbn13)
    useEffect(() => {
        dispatch(loadBigBook(isbn13))
    }, [isbn13, dispatch])
    return (
        <div className="bigBook_wrap">
            <header className="bigBook_header">
                <Link to='/books' className="bigBook_header-link">
                    <div className="bigBook_header-arrow"></div>
                </Link>
                <h1 className="bigBook_header-title">{bigBook.title}</h1>
            </header>
            <div className="bigBook_main-wrap">
                <div className="biBbook_image-wrap">
                    <img src={bigBook.image} className="biBbook_main-image" />
                    <div className="heart-wrap">
                        <button
                            className='black-heart'
                            onClick={() => {
                                const favouriteBook: ILIkeBook = {
                                    isbn13: bigBook.isbn13,
                                    title: bigBook.title,
                                    price: bigBook.price,
                                    authors: bigBook.authors,
                                    image: bigBook.image,
                                };
                                dispatch(likeBook(favouriteBook))
                            }}
                        />
                    </div>
                </div>
                <div className="biBbook_main-data">
                    <div className="bigBook_data-wrap">
                        <div className="bigBook_data bigBook_data-pricestars">
                            <span className="bigBook_data-price">{bigBook.price}</span>
                            <div className="bigBook_data-stars"></div>
                        </div>
                        <div className="bigBook_data">
                            <span className="bigBook_data-span-left">Authors</span>
                            <span className="bigBook_data-span-right">{bigBook.authors}</span>
                        </div>
                        <div className="bigBook_data">
                            <span className="bigBook_data-span-left">Publisher</span>
                            <span className="bigBook_data-span-right">{bigBook.publisher}</span>
                        </div>
                        <div className="bigBook_data">
                            <span className="bigBook_data-span-left">Year</span>
                            <span className="bigBook_data-span-right">{bigBook.year}</span>
                        </div>
                        <div className="bigBook_data">
                            <span className="bigBook_data-span-left">pages</span>
                            <span className="bigBook_data-span-right">{bigBook.pages}</span>
                        </div>
                    </div>
                    <Button
                        children="add to cart"
                        className="bigBook_main-button"
                        onClick={() => {
                            const cartItem: ICart = {
                                isbn13: bigBook.isbn13,
                                title: bigBook.title,
                                price: bigBook.price,
                                authors: bigBook.authors,
                                image: bigBook.image,
                                quan: 1,
                            };
                            dispatch(addToCart(cartItem))
                        }}
                    />
                    <span className="bigBook_main-span">Preview book</span>
                </div>
            </div>
            <main className="bigBook_description">{bigBook.desc}</main>
            <footer className="bigBook_footer">
                <div className="bigBook_footer-icons-wrap">
                    <div className="bigBook_footer-icon bigBook-facebook"></div>
                    <div className="bigBook_footer-icon bigBook-twitter"></div>
                    <div className="bigBook_footer-icon bigBook-more"></div>
                </div>
                <div className="pag-wrap">
                    <Link to={index === 0 ? `/books` : `/books/${allBooks[index - 1].isbn13}`}><button className="pag-but">Prev</button></Link>
                    <Link to={index === allBooks.length - 1 ? `/books` : `/books/${allBooks[index + 1].isbn13}`}><button className="pag-but">Next</button></Link>
                </div>
            </footer>
        </div>
    )
}

export { BigBook }