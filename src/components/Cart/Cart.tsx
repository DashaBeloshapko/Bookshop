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
                        <div className="cartitem_price">{el.price * el.quan}</div>
                        <button className="cartitem-close-but" onClick={() => handleRemoveFromCart(el.isbn13)}></button>
                    </div>)}
            </div>
        </div>
    )
}

export { Cart }

// > Антон:
// import './BasketWindow.css';
// import { Link } from 'react-router-dom';
// import { Arrow } from '../Icons/Arrow';
// import { useSelector, useDispatch } from 'react-redux';
// import { IStoreState } from '../../types';
// import { ICart } from '../../types';
// import { CancelIcon } from '../Icons/CancelIcon';
// import { Minus } from '../Icons/Minus';
// import { Plus } from '../Icons/Plus';
// import { Button } from '../Button';
// import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '../../redux/actionCreators';

// const BasketWindow = () => {
//     const cartItems = useSelector((state: IStoreState) => state.books.cart);
//     const dispatch = useDispatch();

//     if (!cartItems || cartItems.length === 0) {
//         return (
//             <div className='empty__wrapper'>
//                 <div className='empty-basket'>Cart is empty</div>
//             </div>
//         );
//     }

//     const colors = [
//         'rgba(215, 228, 253, 1)',
//         'rgba(254, 233, 226, 1)',
//         'rgba(244, 238, 253, 1)'
//     ];

//     const getRandomColor = () => {
//         return colors[Math.floor(Math.random() * colors.length)];
//     };

//     const handleIncreaseQuantity = (isbn13: number) => {
//         dispatch(increaseQuantity(isbn13));
//     };

//     const handleDecreaseQuantity = (isbn13: number) => {
//         dispatch(decreaseQuantity(isbn13));
//     };

//     const handleRemoveFromCart = (isbn13: number) => {
//         dispatch(removeFromCart(isbn13));
//     };

//     const handleCheckout = () => {
//         dispatch(clearCart());
//     };

//     const cleanPrice = (price: string) => parseFloat(price.replace(/[^0-9.-]+/g, ''));

//     const totalSum = cartItems.reduce((sum, item) => {
//         const price = cleanPrice(item.price.toString());
//         const quantity = item.quantity ?? 1;
//         return sum + price * quantity;
//     }, 0);

//     const vat = (totalSum * 0.1).toFixed(2);
//     const total = (totalSum + parseFloat(vat)).toFixed(2);

//     return (
//         <article className='basket__wrapper'>
//             <p className='upper__wrapper'>
//                 <div className='basket_header'>
//                     <div className='basket_header-menu'>
//                         <Link to='/new' className='basket_header-arrow'>
//                             <Arrow />
//                         </Link>
//                     </div>
//                     <h3 className='basket_header-title'>Your cart</h3>
//                 </div>
//             </p>

// > Антон:
// {cartItems.map((cart) => {
//                 const totalPriceForItem = (cleanPrice(cart.price.toString()) * cart.quantity).toFixed(2);
//                 return (
//                     <div className='item__wrapper' key={cart.isbn13}>
//                         <div className='image__basket-wrapper' style={{ backgroundColor: getRandomColor() }}>
//                             <img className='image-basket' src={cart.image} alt={cart.title} />
//                         </div>
//                         <div className='title__item-wrapper'>
//                             <Link to={/books/${cart.isbn13}} className='title__item-basket'>{cart.title}</Link>
//                             <div className='author__item-basket'>{cart.authors}</div>
//                             <div className='plus__minus-wrapper'>
//                                 <Minus onClick={() => handleDecreaseQuantity(cart.isbn13)}/>
//                                 <div className='count__books'>{cart.quantity}</div>
//                                 <Plus onClick={() => handleIncreaseQuantity(cart.isbn13)}/>
//                             </div>
//                         </div>
//                         <div className='price__cancel-wrapper'>
//                             <div className='price__item-basket'>${totalPriceForItem}</div>
//                             <CancelIcon onClick={() => handleRemoveFromCart(cart.isbn13)}/>
//                         </div>
//                     </div>
//                 );
//             })}
//             <p className='count'>
//                 <div className='count__wrapper'>
//                     <div className='sum__count-wrapper'>
//                         <div className='sum-wrapper'>
//                             <div className='sum-title'>Sum total</div>
//                             <div className='sum'>$ {totalSum.toFixed(2)}</div>
//                         </div>
//                         <div className='vat-wrapper'>
//                             <div className='vat-title'>VAT</div>
//                             <div className='vat'>$ {vat}</div>
//                         </div>
//                         <div className='total-wrapper'>
//                             <div className='total-title'>TOTAL</div>
//                             <div className='total-sum'>$ {total}</div>
//                         </div>
//                     </div>
//                     <Link to='/order'>
//                         <Button
//                             className='check__out-button'
//                             onClick={handleCheckout}
//                             children='CHECK OUT'
//                         />
//                     </Link>
//                 </div>
//             </p>
//         </article>
//     );
// }

// export { BasketWindow }
