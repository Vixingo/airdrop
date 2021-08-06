import React from "react";

function Hero() {
    return (
        <>
            <section className="Hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="Hero_head">
                                More Effective, Targeted Airdrops
                            </h1>
                            <p className="Hero_text">
                                AirdropMessenger distributes cryptocurrency
                                Airdrops based on users’ engagement with
                                promotional materials: landing pages,
                                whitepapers and informative videos
                            </p>
                            <button className="btn Hero_btn_1">
                                Connect Wallet
                            </button>
                            <button className="btn Hero_btn_2">
                                How it Works
                            </button>
                        </div>
                        <div className="col-md-6">
                            <div className="Hero_img">
                                <img src="/img/hero.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
