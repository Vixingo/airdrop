import React from "react";

function Navbar() {
    return (
        <>
            <section className="Navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img src="/img/logo.png" alt="" />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            Airdrops
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            List your Airdrop
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                                <div className="nav_search">
                                    <div className="search_div">
                                        <input
                                            className="form-control "
                                            type="search"
                                            placeholder="Search airdrops"
                                            aria-label="Search"
                                        />
                                        <span className="search_btn">
                                            <i class="fas fa-search"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <button className="btn nav_connect">
                                            Connect Wallet
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default Navbar;
