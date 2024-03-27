import cl from "./JoinTheClub.module.css"

const JoinTheClub = () => {
    return (
        <div className={cl.joinTheClub}>
            <div className={cl.container}>
                <div className={cl.content}>
                    <h1 className={cl.title}>Join the club and get the benefits</h1>
                    <p className={cl.desc}>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                    <form className={ cl.formJoinTheClub }>
                        <input type="email" className={ cl.inputEmail } placeholder="your@email.com"/>
                        <input type="submit" value="Sign Up" className={ cl.inputSubmit }/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinTheClub;