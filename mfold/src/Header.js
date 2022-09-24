import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    className="header__leftLogo"
                    src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
                    alt="twich logo"
                />
                <h2>Following</h2>
                <h2>Browse</h2>
                <div className="header__verticalLine"></div>
                <h2>Esports</h2>
                <h2>Music</h2>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div className="header__center">
                <input type="text" placeholder="search" />
                <div className="header__centerLogoContainer">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div className="header__right">
                <div className="header__rightContainer">
                    <i className="fas fa-crown"></i>
                    <i className="fas fa-inbox"></i>
                    <i class="fa-solid fa-message"></i>
                    <div className="header__rightBits">
                        <i class="fa-regular fa-gem"></i>
                        <h4>Get Bits</h4>
                    </div>

                    <Avatar />
                </div>
            </div>
        </div>
    );
};

export default Header;
