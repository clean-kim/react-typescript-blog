import {Blog} from "../interface/Blog";

export function ListItems(props: Pick<Blog, 'title'>) {
    return <li><a href="">{props.title}</a></li>
}