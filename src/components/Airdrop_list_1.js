import React from "react";
import Airdrop_item from "./Airdrop_item";

function Airdrop_list_1() {
    return (
        <>
            <section className="Airdrop_list_1">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <div className="btn-group ">
                            <button
                                className="btn btn-lg dropdown-toggle latest_btn"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Latest Airdrops&nbsp;
                            </button>
                            <ul className="dropdown-menu">...</ul>
                        </div>
                        <div>
                            <button className="btn ad_search_btn">
                                Advanced Search
                            </button>
                        </div>
                    </div>

                    <div className="tittle_div">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-2">
                                <p className="text-center">End date</p>
                            </div>
                            <div className="col-md-4">
                                <p className="text-center">Tasks</p>
                            </div>
                            <div className="col-md-2">
                                <p className="text-center">Rewards</p>
                            </div>
                        </div>
                    </div>
                    <Airdrop_item />
                    <Airdrop_item />
                    <Airdrop_item />
                    <Airdrop_item />
                    <Airdrop_item />
                </div>
            </section>
        </>
    );
}

export default Airdrop_list_1;
