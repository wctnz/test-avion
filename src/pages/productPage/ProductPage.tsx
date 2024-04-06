import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ItemCard from "../../components/itemCard/ItemCard";
import JoinTheClub from "../../components/joinTheClub/JoinTheClub";
import OurPopular from "../../components/ourPopular/OurPopular";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import { useAppSelector } from "../../hooks/redux-hooks";
import { IProduct } from "../../types/types";

const ProductPage = () => {

    const { items } = useAppSelector(state => state.shop)
    const { category, id } = useParams()
    const item: IProduct = items.find(item => item.category === category && item.id === Number(id))!
    const { pathname } = useLocation()

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    return (
        <div>
            <Header />
            <ItemCard item={item} />
            <OurPopular />
            <SectionTwo />
            <JoinTheClub />
            <Footer />
        </div>
    );
};

export default ProductPage;