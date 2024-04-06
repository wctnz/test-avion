import { FC } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../types/types";
import cl from "./CategoryList.module.css"

interface CategoryListProps {
    selected: IProduct[]
    category: string
}

const CategoryList: FC<CategoryListProps> = ({ selected, category }) => {
    return (
        <div className={cl.ourPopular}>
            <div className={cl.container}>
                <div className={cl.title}>
                    <h2 className={cl.titleHeader}>{ category }</h2>
                </div>
                <div className={cl.row}>
                    {selected.map(el => (
                        <div className={`${cl.card} ${cl.sofa}`}>
                            <img src={el.image} alt={el.title} className={ cl.cardImage }/>
                            <h4 className={cl.cartTitle}>{el.title}</h4>
                            <p className={cl.cartDesc}>{el.price}</p>
                            <Link className={cl.cardLink} to={`http://localhost:3000/${el.category}/${ el.id }`}></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryList;