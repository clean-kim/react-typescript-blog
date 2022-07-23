import {Link, useLocation} from "react-router-dom";
import ButtonStyle from "../assets/css/Button.module.scss";
import React, {useState} from "react";

function sets(pathname: string) {

}

export function Button() {
    const location = useLocation();
    const pathname = location.pathname.replace('/','');
    const [linkText, setLinkText] = useState('글쓰기');

    return (
        <div style={{textAlign: 'right'}}>
            <Link to={'/'+pathname} className={ButtonStyle.abtn}>{linkText}</Link>
        </div>
    )
}