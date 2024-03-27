import cl from "./OurPopular.module.css"
import img1 from "./../../assets/images/ourPopular/1.png"
import img2 from "./../../assets/images/ourPopular/2.png"
import img3 from "./../../assets/images/ourPopular/3.png"

const OurPopular = () => {
    return (
        <div className={ cl.ourPopular }>
            <div className={ cl.container }>
                <div className={ cl.title }>
                    <h2 className={ cl.titleHeader }>Our popular products</h2>
                </div>
                <div className={ cl.row }>

                    <div className={ cl.card }>
                        <img src={ img1 } alt="sofa"/>
                        <h4 className={ cl.cartTitle }>The Poplar suede sofa</h4>
                        <p className={ cl.cartDesc }>£980</p>
                        <a href="#"></a>
                    </div>

                    <div className={ cl.card }>
                        <img src={ img2 } alt="chair"/>
                        <h4 className={ cl.cartTitle }>The Dandy chair</h4>
                        <p className={ cl.cartDesc }>£250</p>
                        <a href="#"></a>
                    </div>

                    <div className={ cl.card }>
                        <img src={ img3 } alt="chair"/>
                        <h4 className={ cl.cartTitle }>The Dandy chair</h4>
                        <p className={ cl.cartDesc }>£250</p>
                        <a href="#"></a>
                    </div>
                </div>
                <div className={ cl.button }>
                    <button>View collection</button>
                </div>
            </div>
        </div>
    );
};

export default OurPopular;