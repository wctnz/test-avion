import cl from "./NewCeramics.module.css"
import img1 from "./../../../src/assets/images/newCeramics/1.png"
import img2 from "./../../../src/assets/images/newCeramics/2.png"
import img3 from "./../../../src/assets/images/newCeramics/3.png"
import img4 from "./../../../src/assets/images/newCeramics/4.png"

const NewCeramics = () => {
    return (
        <div className={cl.newCeramics}>
            <div className={cl.container}>
                <div className={cl.newCeramics__title}>
                    <h1>New ceramics</h1>
                </div>

                <div className={cl.newCeramics__row}>

                    <div className={cl.newCeramics__rowCard}>
                        <div className={cl.newCeramics__rowCardImg}>
                            <img src={img1} alt="chair" />
                        </div>
                        <h4 className={cl.newCeramics__rowCardTitle}>The Dandy chair</h4>
                        <p className={cl.newCeramics__rowCardDesc}>£250</p>
                        <a href="#"></a>
                    </div>

                    <div className={cl.newCeramics__rowCard}>
                        <div className={cl.newCeramics__rowCardImg}>
                            <img src={img2} alt="chair" />
                        </div>
                        <h4 className={cl.newCeramics__rowCardTitle}>Rustic Vase Set</h4>
                        <p className={cl.newCeramics__rowCardDesc}>£155</p>
                        <a href="#"></a>
                    </div>

                    <div className={cl.newCeramics__rowCard}>
                        <div className={cl.newCeramics__rowCardImg}>
                            <img src={img3} alt="chair" />
                        </div>
                        <h4 className={cl.newCeramics__rowCardTitle}>The Silky Vase</h4>
                        <p className={cl.newCeramics__rowCardDesc}>£125</p>
                        <a href="#"></a>
                    </div>

                    <div className={cl.newCeramics__rowCard}>
                        <div className={cl.newCeramics__rowCardImg}>
                            <img src={img4} alt="chair" />
                        </div>
                        <h4 className={cl.newCeramics__rowCardTitle}>The Lucy Lamp</h4>
                        <p className={cl.newCeramics__rowCardDesc}>£399</p>
                        <a href="#"></a>
                    </div>

                </div>

                <div className={cl.newCeramics__button}>
                    <button>View collection</button>
                </div>
            </div>
        </div>
    );
};

export default NewCeramics;