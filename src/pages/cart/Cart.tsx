import React from 'react';
import CartList from '../../components/cartList/CartList';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Cart = () => {
    return (
        <div>
            <Header />
            <CartList />
            <Footer />
        </div>
    );
};

export default Cart;