import React from "react";

import "./styles.scss";
import { Link } from "react-router-dom";

const ItemInfiniteScroll = ({ element, showLinks = false }) => {
    return <div className="item-infinite-scroll-container">
        <div className="item-infinite-scroll-header">
            <div className="item-infinite-scroll-info">
                {
                    Object.keys(element).map(function (key, i) {
                        return <p key={i}>
                            <strong>{key}</strong><br></br>
                            <span>{element[key]}</span>
                        </p>
                    })
                }
                {showLinks && <p>
                    <Link to={`user-friendships/${element['id']}`}>
                    <div className="item-title">Friendships</div>
                    </Link>
                    <Link to={`user-lessons/${element['id']}`}>
                        <div className="item-title">Lessons</div>
                    </Link>
                </p>}
            </div>
        </div>
    </div>
}

export default ItemInfiniteScroll;