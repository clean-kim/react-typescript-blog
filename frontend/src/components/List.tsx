import axios from "axios";
import {useEffect, useState} from "react";
import {Blog} from "../interface/Blog";


function List() {
    type BlogTitle = Pick<Blog, 'no' | 'title'>;
    const [list, setList] = useState([{no: 0, title: ''}]);
    useEffect(() => {
        axios.get('/api/list').then(res => {
            res.data.forEach((item: Blog) => {
                // const blogTitle: BlogTitle = { no: item.no, title: item.title};
                setList([{...list, no: item.no, title: item.title}]);
            });
            console.log('list > ', list);
        });

    }, []);
    return (
        <ul>
        </ul>
    )
}

export default List;