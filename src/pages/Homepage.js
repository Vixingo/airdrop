import React from "react";
import Airdrop_list_1 from "../components/Airdrop_list_1";
import Hero from "../components/Hero";
import How_it_work from "../components/How_it_work";
import Navbar from "../components/Navbar";
function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Airdrop_list_1 />
            <How_it_work />
        </>
    );
}

export default Homepage;
