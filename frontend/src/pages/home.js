import '../styles/styles.scss';


function Home() {
    return (
        <section className='homesec'>
            <div className='homeComponents'>
                <div className='intro'>
                    <div className='grp'>Group TBD | Berenguer, Buendia, Lima, Pinpin</div>
                    <div className='title'>Artwork to <br></br>
                    Photograph <br></br>
                    - Style Transfer</div>
                    <div className='desc'>
                        This website is an implementation of style transfer by using Tensorflow, React, and Flask.
                    </div>
                    <Link to='/Input' className='btn-demo'>Demo 
                        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5303 7.03033C16.8232 6.73744 16.8232 6.26256 16.5303 5.96967L11.7574 1.1967C11.4645 0.903806 10.9896 0.903806 10.6967 1.1967C10.4038 1.48959 10.4038 1.96447 10.6967 2.25736L14.9393 6.5L10.6967 10.7426C10.4038 11.0355 10.4038 11.5104 10.6967 11.8033C10.9896 12.0962 11.4645 12.0962 11.7574 11.8033L16.5303 7.03033ZM0 7.25H16V5.75H0V7.25Z" fill="#0D3866"/>
                        </svg>
                    </Link>
                </div>
                <div className='pic'>
                    <img src='./home-pic.png'></img>
                </div>
            </div>
        </section>
    );
}

export default Home;
