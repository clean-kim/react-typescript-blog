import {Blog} from "../interface/Blog";
import {Link} from "react-router-dom";

export function ListItems(props: Pick<Blog, 'no' | 'title'>) {
    return <li><Link to={'/detail?no='+props.no} key={props.no} >{props.title}</Link></li>
}