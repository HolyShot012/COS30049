import React from "react";
import Item from "./item";
import SwapBox from "./swapBox";
import Container2Item from "./Container-2";

const HomeComponent = () => {
    return (
        <>
            <div className="home-component-1">
                <Item />
                <div className="home-component--content">
                    <h1 className="home-component--title">Swap anytime, anywhere</h1>
                    <div className="swap-box">
                        <SwapBox />
                        <div className="swap-box--select">F</div>
                        <SwapBox />
                        <button className="swap-button">Get Started</button>
                    </div>
                    <p className="home-component--footer">the best crypto exchange</p>

                </div>
            </div >

            <div className="home-component-2">

                <h1 className="home-component-2--title">Go direct to Defi</h1>
                <div className="home-component-2--container">

                    <Container2Item />
                    <Container2Item />
                    <Container2Item />
                    <Container2Item />


                </div>
            </div>

        </>
    )
}

export default HomeComponent