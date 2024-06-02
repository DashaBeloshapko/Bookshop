import { useDispatch, useSelector } from "react-redux";
import { IStoreStateBooks } from "../../types";
import './Cart.css'
import { Link } from "react-router-dom";
import { minusQuan, plusQuan, removeFromCart } from "../../redux/actionCreators";

const Cart = () => {
    const cartItems = useSelector((state: IStoreStateBooks) => state.books.cart);
    const dispatch = useDispatch()

    const handleRemoveFromCart = (isbn13: number) => {
        dispatch(removeFromCart(isbn13))
    }

    const handlePlusQuan = (isbn13: number) => {
        dispatch(plusQuan(isbn13))
    }

    const handleMinusQuan = (isbn13: number) => {
        dispatch(minusQuan(isbn13))
    }

    return (
        <div className="cart_wrap">
            <header className="cart_header">
                <Link to='/books' className="cart_header-link">
                    <div className="cart_header-arrow"></div>
                </Link>
                <h1 className="cart_header-title">{cartItems.length ? `Your cart` : `Your cart is clear`}</h1>
            </header>
            <div className="cartitem_wrap">
                {cartItems.map((el) =>
                    <div className="cartitem">
                        <div className="cartitem_image-wrap">
                            <img src={el.image} className="cartitem_image" />
                        </div>
                        <div className="cartitem_data-wrap">
                            <Link to={`/books/${el.isbn13}`} className="cartitem-LINK"><h3 className="cartitem_data-title">{el.title}</h3></Link>
                            <h5 className="cartitem_data-authors">{el.authors}</h5>
                            <div className="cartitem_data-counter">
                                <button className="cartitem-counter-but" onClick={() => handleMinusQuan(el.isbn13)} disabled={el.quan === 1 ? true : false}>-</button>
                                <button className="cartitem-counter-but" disabled>{el.quan}</button>
                                <button className="cartitem-counter-but" onClick={() => handlePlusQuan(el.isbn13)}>+</button>
                            </div>
                        </div>
                        <div className="cartitem_price">{el.price}</div>
                        <button className="cartitem-close-but" onClick={() => handleRemoveFromCart(el.isbn13)}></button>
                    </div>)}
            </div>
        </div>
    )
}

export { Cart }


