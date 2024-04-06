import cl from "./SectionOne.module.css"
import chairOne from "./../../../src/assets/images/sectionOne/chair1.png"

const SectionOne = () => {
    return (
        <div className={cl.sectionOne}>
            <div className={cl.container}>

                <div className={cl.content}>

                    <div className={cl.leftPart}>
                        <div className={cl.title}>
                            <h1 className={ cl.leftPartHeader }>The furniture brand for the <br/> future, with timeless designs</h1>
                        </div>
                        <div className={cl.button}>
                            <button className={ cl.leftPartBtn }>View collection</button>
                        </div>
                        <div className={cl.desc}>
                            <p className={ cl.leftPartDesc }>A new era in eco friendly furniture with Avelon, the French luxury retail brand
                                with nice fonts, tasteful colors and a beautiful way to display things digitally
                                using modern web technologies.</p>
                        </div>
                    </div>
                    
                    <div className={cl.rightPath}>
                        <img src={ chairOne } alt="chair" className={cl.rightPathImg}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;