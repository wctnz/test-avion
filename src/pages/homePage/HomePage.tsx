import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import JoinTheClub from '../../components/joinTheClub/JoinTheClub';
import NewCeramics from '../../components/newCeramics/NewCeramics';
import OurPopular from '../../components/ourPopular/OurPopular';
import SectionOne from '../../components/sectionOne/SectionOne';
import SectionThree from '../../components/sectionThree/SectionThree';
import SectionTwo from '../../components/sectionTwo/SectionTwo';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchItems } from '../../store/reducers/ActionCreators';

const HomePage = () => {

    const dispatch = useAppDispatch()
    const { items } = useAppSelector(state => state.shop)

    useEffect(() => {
        dispatch(fetchItems())
    }, [])

    return (
        <>
            <Header />
            <SectionOne />
            <SectionTwo />
            <NewCeramics />
            <OurPopular />
            <JoinTheClub />
            <SectionThree />
            <Footer />
        </>
    );
};

export default HomePage;