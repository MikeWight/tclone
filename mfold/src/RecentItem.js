import React from "react";
import "./RecentItem.css";

const RecentItem = ({ url, title }) => {
    return (
        <div className="item">
            <iframe
                width="400"
                height="235"
                src={url}
                title="Players accusing Hans Niemann of cheating for 2 minutes and 26 seconds"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <div className="item__details">
                <img src="https://i.pravatar.cc?img=6"></img>
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>cp</p>
                    <p>Science & Tech</p>
                </div>
            </div>
        </div>
    );
};

export default RecentItem;
