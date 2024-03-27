import cl from "./SectionThree.module.css"
import img1 from "./../../assets/images/sectionThree/1.png"

const SectionThree = () => {
    return (
        <div className={cl.sectionThree}>

            <div className={cl.container}>

                <div className={cl.row}>

                    <div className={cl.sectionLeft}>
                        
                        <div className={cl.title}>
                            <h4>From a studio in London to a global brand with
                                over 400 outlets</h4>
                        </div>
                       
                        <div className={cl.desc}>
                            <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.<br/><br/>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                        </div>
                       
                        <div className={cl.button}>
                            <button>Get in touch</button>
                        </div>

                    </div>

                    <div className={cl.sectionRight}>
                        <img src={img1} alt="furniture" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SectionThree;