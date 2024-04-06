import cl from "./CartList.module.css"
import img1 from "./../../assets/images/newCeramics/5.png"
import plus from "./../../assets/icons/icons-producCard/+.png"
import minus from "./../../assets/icons/icons-producCard/-.png"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { RxCross1 } from "react-icons/rx";
import { cartSlice } from "../../store/reducers/cartSlice";
import { IProduct } from "../../types/types";

const CartList = () => {

    const { cart } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    const subtotal = cart.reduce((acc, el) => {
        return acc+el.price*el.count
    }, 0)

    const handlePlusClick = (el: IProduct) => {
        dispatch(cartSlice.actions.plusItem(el))
        console.log("plus 1")
    }

    return (
        <>
            <div className={cl.CartList}>
                <div className={cl.container}>
                    <div className={cl.title}>
                        <p>Your shopping cart</p>
                    </div>
                    <div className={cl.items}>
                        <div className={cl.items__tittleRow}>
                            <p>Product</p>
                            <p>Quantity</p>
                            <p className={cl.items__tittleRow_total}>Total</p>
                        </div>
                        <div className={cl.divider}></div>
                        {cart.length === 0 && <h1 className={cl.emptyCart}>Корзина пуста</h1>}

                        {cart.map(el => (

                            <div key={el.id} className={cl.item}>

                                <div className={cl.item__product}>

                                    <div className={cl.item__product_img}>
                                        <img src={el.image} alt={el.title} />
                                    </div>

                                    <div className={cl.item__product_info}>
                                        <p className={cl.info__title}>{el.title}</p>
                                        <p className={cl.info__desc}>{el.desc}</p>
                                        <p className={cl.info__price}>£{el.price}</p>
                                    </div>

                                </div>
                                <div className={cl.input}>
                                    <div className={cl.count}>
                                        <div className={cl.count__box}>
                                            <input type="number" min="1" max="10" value={el.count} className={cl.count__input} />
                                        </div>
                                        <div className={cl.count__controls}>
                                            <button
                                                onClick={() => handlePlusClick(el)}
                                                type="button"
                                                className={cl.count__up}>
                                                <img src={plus} alt="plus" />
                                            </button>
                                            <button
                                                onClick={() => dispatch(cartSlice.actions.minusItem(el))}
                                                type="button"
                                                className={cl.count__down}>
                                                <img src={minus} alt="minus" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cl.item__total}>
                                    <p>£{el.price*el.count}</p>
                                </div>
                                <div className={cl.item__closeBtn}>
                                    <button
                                        onClick={() => dispatch(cartSlice.actions.removeFromCart(el))}
                                    >
                                        <RxCross1 />
                                    </button>
                                </div>
                            </div>

                        ))}
                        <div className={cl.divider}></div>
                        {cart.length !== 0 &&
                            <div className={cl.bottomSection}>
                                <div className={cl.bottomSection__subtotal}>
                                    <p className={cl.bottomSection__subtotal_title}>Subtotal</p>
                                    <p className={cl.bottomSection__subtotal_price}>£{subtotal}</p>
                                </div>
                                <div className={cl.bottomSection__taxesInfo}>
                                    <p>Taxes and shipping are calculated at checkout</p>
                                </div>
                                <div className={cl.bottomSection__button}>
                                    <button>Go to checkout</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>);
};

export default CartList;