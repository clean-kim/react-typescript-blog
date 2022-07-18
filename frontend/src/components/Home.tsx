import React, {useEffect, useState} from "react";
import List from "./List";
import { Link } from "react-router-dom";
import axios from "axios";
import {Blog} from "../interface/Blog";
import ButtonStyle from "../assets/css/Button.module.scss";

function Home() {
    const [list, setList] = useState<Blog[]>([{no: 0, title: ''}]);
    useEffect(() => {
        axios.get('/api/list').then(res => {
            setList(res.data.map((item: Blog) => {
                return {no: item.no, title: item.title};
            }));
        });
    }, []);

    return (
        <div>
            <div style={{textAlign: 'right'}}>
                <Link to="" className={ButtonStyle.abtn}>글쓰기</Link>
            </div>
            <List blogList={list} />
        </div>
    )
}

export default Home;