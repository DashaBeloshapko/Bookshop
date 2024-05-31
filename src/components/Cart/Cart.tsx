import { useDispatch, useSelector } from "react-redux";
import { ICart, IStoreStateBooks } from "../../types";
import './Cart.css'
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actionCreators";
import { useEffect } from "react";

const Cart = () => {
    const dispatch = useDispatch()

    const cartItems = useSelector((state: IStoreStateBooks) => state.books.cart);

    const cartLocal = []

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
                            <h3 className="cartitem_data-title">{el.title}</h3>
                            <h5 className="cartitem_data-authors">{el.authors}</h5>
                            <div className="cartitem_data-counter">
                                <button className="cartitem-counter-but" onClick={() => el.quan = el.quan - 1} disabled={el.quan === 1 ? true : false}>-</button>
                                <button className="cartitem-counter-but" disabled>{el.quan}</button>
                                <button className="cartitem-counter-but" onClick={() => el.quan = el.quan + 1}>+</button>
                            </div>
                        </div>
                        <div className="cartitem_price">{el.price}</div>
                        <button className="cartitem-close-but"></button>
                    </div>)}
            </div>
        </div>
    )
}

export { Cart }