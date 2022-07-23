import { useEffect } from "react";
import axios from "axios";
import {useSearchParams} from "react-router-dom";

function Detail() {
    const [searchParams, setSearchParams] = useSearchParams();
    const no = searchParams.get("no");
    console.log('searchParams no >> ', no);

    useEffect(() => {
        axios.get('/api/')
    }, []);

    return (
        <div>
            상세
        </div>
    )
}

export default Detail;