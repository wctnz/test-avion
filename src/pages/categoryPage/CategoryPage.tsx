import { Link, useParams } from 'react-router-dom';
import CategoryList from '../../components/categoryList/CategoryList';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import JoinTheClub from '../../components/joinTheClub/JoinTheClub';
import OurPopular from '../../components/ourPopular/OurPopular';
import SectionTwo from '../../components/sectionTwo/SectionTwo';
import { useAppSelector } from '../../hooks/redux-hooks';

const CategoryPage = () => {

    const { category } = useParams()
    const { items } = useAppSelector(state => state.shop)

    const selected = items.filter(item => item.category === category)
    console.log("selected", selected)
    return (
        <>
            <Header />
            <CategoryList selected={selected} category={category as string} />
            <OurPopular />
            <SectionTwo />
            <JoinTheClub />
            <Footer />
        </>
    );
};

export default CategoryPage;