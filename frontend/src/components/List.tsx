import React from "react";
import {ListItems} from "./ListItems";
import {BlogProps} from "../interface/Blog";
import ListStyle from "../assets/List.module.scss";

function List({blogList}: BlogProps) {
    const listItems = blogList.map(item =>
        <ListItems key={item.no} title={item.title} />
    );
    return (
        <ul style={ListStyle}>
            {listItems}
        </ul>
    )
}

export default List;