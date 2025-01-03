import React from "react";
import Item from "./item";
const HomeComponent = () => {
    return (
        <>
            <div className="home-component">
                <Item />
                <div className="home-component--content">
                    <h1 className="home-component--title">Swap anytime, anywhere</h1>
                    <div className="swap-box">
                        <div className="swap-box--container buy">
                            <span className="swap-box--span">Sell</span>
                            <div className="swap-box--input">
                                <input type="text"></input>
                                <select>
                                    <option value="Select token">Select token</option>
                                </select>
                            </div>
                            <span className="swap-box--span">$0</span>
                        </div>
                        <div className="swap-box--container sell"></div>
                        <button className="swap-button">Get Started</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeComponent