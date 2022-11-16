import React from "react";
import '../styles/nft.css'


const Nft = () => {
    return(
        <section className="nft-section">
            <div className="nft">
                <div className="nft-lhs">
                    <div className="nft-lhs-copy">
                        <h1> Metabnb NFTs </h1>
                        <p> Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services. </p>
                    </div>
                    <button className="button">Learn more</button>
                </div>
                <div className="nft-rhs">
                    <img src="https://i.imgur.com/PftThaQ.png" alt="nft-sussan" />
                    <img src="https://i.imgur.com/NoFtyNv.png" alt="nft-sussan" />
                    <img src="https://i.imgur.com/Y4Tuhb6.png" alt="nft-sussan" />
                </div>
            </div>
        </section>
    )
}

export default Nft;