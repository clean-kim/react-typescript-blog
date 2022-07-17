import React, {useEffect, useState} from "react";
import List from "./List";
import axios from "axios";
import {Blog} from "../interface/Blog";

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
        <List blogList={list} />
    )
}

export default Home;