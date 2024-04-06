import { FC } from "react";
import cl from "./ItemCard.module.css"
import { IProduct } from "./../../types/types"
import plus from "./../../assets/icons/icons-producCard/+.png"
import minus from "./../../assets/icons/icons-producCard/-.png"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { cartSlice } from "../../store/reducers/cartSlice";
import { itemsSlice } from "../../store/reducers/itemsSlice";

interface ItemCardProps {
    item: IProduct
}

const ItemCard: FC<ItemCardProps> = ({ item }) => {
    const { category, id, image, price, title, popular, count } = item
    const { cart } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    const dimensions__rowTop = ["Height", "Width", "Depth"]
    const dimensions__rowBottom = ["100см", "75см", "50см"]
    return (
        <div className={cl.itemCard}>
            <div className={cl.container}>
                <div className={cl.row}>
                    <div className={cl.leftSection}>
                        <img src={image} alt={title} className={cl.leftSectionImg} />
                    </div>
                    <div className={cl.rightSection}>
                        <div className={cl.rightSection__container}>
                            <div className={cl.title}>
                                <p>The Dandy Chair</p>
                            </div>
                            <div className={cl.price}>
                                <p>£250</p>
                            </div>
                            <div className={cl.desc}>
                                <div className={cl.desc__title}>
                                    <p>Description</p>
                                </div>
                                <div className={cl.desc__desc}>
                                    <p>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                                </div>
                                <div className={cl.desc__list}>
                                    <ul>
                                        <li>Premium material</li>
                                        <li>Handmade upholstery</li>
                                        <li>Quality timeless classic</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={cl.dimensions}>
                                <p className={cl.dimensions__title}>Dimensions</p>
                                <div className={cl.dimensions__rowTop}>
                                    {dimensions__rowTop.map(el => {
                                        return (
                                            <p key={el}>{el}</p>
                                        )
                                    })}
                                </div>
                                <div className={cl.dimensions__rowBottom}>
                                    {dimensions__rowBottom.map(el => {
                                        return (
                                            <p key={el}>{el}</p>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={cl.bottomRow}>

                                <div className={cl.input}>
                                    <label>
                                        Amount:
                                    </label>
                                    <div className={cl.count}>
                                        <div className={cl.count__box}>
                                            <input type="number" min="1" max="10" value={count} className={cl.count__input} />
                                        </div>
                                        <div className={cl.count__controls}>
                                            <button
                                                onClick={() => dispatch(itemsSlice.actions.plusItem(item))}
                                                type="button"
                                                className={cl.count__up}>
                                                <img src={plus} alt="plus" />
                                            </button>
                                            <button
                                                onClick={() => dispatch(itemsSlice.actions.minusItem(item))}
                                                type="button"
                                                className={cl.count__down}>
                                                <img src={minus} alt="minus" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className={cl.buttonAddToCart}>
                                    <button
                                        className={cart.includes(item) ? `${cl.disabled}` : ""}
                                        disabled={cart.includes(item)}
                                        onClick={() => dispatch(cartSlice.actions.addToCart(item))}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ItemCard;



{/* <div className={ cl.count }>
<div className={ cl.count__box }>
    <input type="number" className={ cl.count__input }/>
</div>
<div className={ cl.count__controls }>
<button type="button" className={ cl.count__up }>
<img src="" alt=""/>
</button>
<button type="button" className={ cl.count__down }>
<img src="./img/icons/icon-down.svg" alt=""/>
</button>
</div>

</div> 

.count__input::-webkit-inner-spin-button,
.count__input::-webkit-outer-spin-button {
    appearance: none
}

*/}