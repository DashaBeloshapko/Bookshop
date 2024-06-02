import { useDispatch, useSelector } from 'react-redux'
import './FavouriteBooks.css'
import { ILIkeBook, IStoreStateBooks } from '../../types'
import { Link } from 'react-router-dom'
import { removeFromLikeBook } from '../../redux/actionCreators'

const FavouriteBooks = () => {
    const dispatch = useDispatch()
    const likeBook = useSelector((state: IStoreStateBooks) => state.books.likeBook)
    const handleRemoveFromLikeBook = (isbn13: number) => {
        dispatch(removeFromLikeBook(isbn13));
    };
    return (
        <div className='favor-wrap'>
            <header className="favor_header">
                <Link to='/books' className="favor_header-link">
                    <div className="favor_header-arrow"></div>
                </Link>
                <h1 className="favor_header-title">favourites</h1>
            </header>
            <div className="favor">
                {likeBook.map((el) =>
                    <div className="favor-card">
                        <div className="favor_image-wrap">
                            <img src={el.image} className="favor_image" />
                        </div>
                        <div className="favor_data-wrap">
                            <Link to={`/books/${el.isbn13}`} className="favor-LINK"><h3 className="favor_data-title">{el.title}</h3></Link>
                            <h5 className="favor_data-authors">{el.authors}</h5>
                            <div className="favor_data-footer">
                                <h1 className="favor_data-price">{el.price}</h1>
                                <div className="favor_data-stars"></div>
                            </div>
                        </div>
                        <button className='heart-red' onClick={() => handleRemoveFromLikeBook(el.isbn13)} />
                    </div>)}
            </div>
        </div>
    )
}

export { FavouriteBooks }