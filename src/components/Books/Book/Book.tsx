import { IBook } from "../../../types"
import './Book.css'

const Book = ({ image, title, price, subtitle }: IBook) => {
    return (
        <div className="bookWrap">
            <div className="book_image-wrap">
                <img src={image} className="book-image" />
            </div>
            <h2 className="book_title">{title}</h2>
            <span className="book_span">{subtitle}</span>
            <div className="book_footer">
                <div className="books_footer-price">{price}</div>
                <div className="books_footer-stars"></div>
            </div>
        </div>
    )
}

export { Book }