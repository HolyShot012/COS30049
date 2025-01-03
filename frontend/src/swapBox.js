import React from "react";

const SwapBox = () => {
    return (

        <div className="swap-box--container buy">
            <span className="swap-box--span">Sell</span>
            <div className="swap-box--input">
                <input type="text" placeholder="0"></input>
                <div className="select-box">
                    <div className="select-box--img"></div>
                    <span> ETH</span>

                </div>

                <div />

            </div>
            <span className="swap-box--span">$0</span>
        </div>
    )
}

export default SwapBox;