import {Blog} from "../interface/Blog";

export function ListItems(props: Pick<Blog, 'no' | 'title'>) {
    return <li data-value={props.no}>{props.title}</li>
}