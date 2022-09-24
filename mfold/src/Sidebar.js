import React from "react";
import Channel from "./Channel";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel
                    avatar="https://i.pravatar.cc?img=1"
                    name="cleverprogrammer"
                    followers="820k"
                />
                <Channel
                    avatar="https://i.pravatar.cc?img=2"
                    name="PiNNyBoy"
                    followers="200k"
                />
                <h5>RECOMMENDED CHANNELS</h5>
                <Channel
                    avatar="https://i.pravatar.cc?img=3"
                    name="davidrakosi_"
                    followers="1352"
                />
                <p className="sidebar__topShowMore">Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search to Add Friends" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
