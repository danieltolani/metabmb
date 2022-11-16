import '../styles/home.css'
import '../styles/inspiration.css'
import Sponsors from './Sponsors';
import Inspiration from './Inspiration';
import Nft from './Nft';
import Footer from './Footer';

const Home = () => {
    return(
        <section className="home-section">
            <div className="hero-container">
                <div className="hero-left">
                    <div className="hero-left-copy">
                        <h1 className="hero-copy">Rent a <span className="text-secondary">Place</span> away from <span className="text-secondary">Home</span> in the <span className="text-secondary">Metaverse</span></h1>
                        <p className="hero-par">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    </div>
                    <form className="hero-search">
                        <input placeholder="Search for location"/>
                        <button className='search-button'>search</button>
                    </form>
                </div>

                <div className='hero-right-container'>
                    <div className="hero-right">
                        <img className="hero-image grid-two" src="https://i.imgur.com/PNxllmF.png" alt="NFT_1" />
                        <img className="hero-image" src="https://i.imgur.com/I2gaAWL.png" alt="NFT_2" />
                        <img className="hero-image grid-two" src="https://i.imgur.com/EnOlvrM.png" alt="NFT_3" />
                        <img className="hero-image" src="https://i.imgur.com/J73UDD6.png" alt="NFT_4" />
                    </div>
                </div>
            </div>

            <Sponsors />
            <Inspiration />
            <Nft />
            <Footer />

        </section>
    )
}

export default Home;