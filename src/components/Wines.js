import React, { useState, useEffect } from 'react';
import axios from '../../node_modules/axios/index';
import '../styles/Wines.css'
import { useLocation, useNavigate, useParams } from '../../node_modules/react-router-dom/index';
import wineService from '../services/wineService';

const Wines = () => {
    const [wines, setWines] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState();
    const [count, setCount] = useState();
    const [total, setTotal] = useState();

    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        wineService.clickPrevious({pathname:location.pathname, search:location.search});
        wineService.wineSelect();
        console.log("location\n", location);
        async function fetchData() {
            setWines([]);
            try {
                const response = await axios.get("http://192.168.148.38:8000" + location.pathname + location.search);
                let page = response.data.result.page;
                let count = response.data.result.count;
                let total = response.data.result.total;
                console.log("total: " + total);
                console.log("count: " + count);
                console.log("page: " + page);
                setPage(page);
                setCount(count);
                setTotal(total);
                setWines(response.data.result.items);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        }
        fetchData();
    }, [location]);



    let wineTable;
    let pages = [];

    if (error == null) {
        wineTable = wines.map((wine) => {
            return <tr key={wine.wine}>
                <td id="winery" key={wine.winery}>{wine.winery}</td>
                <td id="wine" key={wine.wine}>{wine.wine}</td>
                <td id="rating" key={wine.rating.average}>{wine.rating.average}</td>
                <td id="location" key={wine.location}>{wine.location}</td>
                <td id="image" key={wine.image}><img src={wine.image} alt={wine.wine} /></td>
            </tr>
        });
    }

    let maxPage = (Math.ceil(page / count) * count);
    let minPage = maxPage - count + 1
    if(maxPage >= total) maxPage = total
    for (let i = minPage; i <= maxPage; i++) {
        pages.push(i);
    }

    // let pageBar = pages.map((page) => {
    //     return <td id="page" key={page} onClick={() => {}}><a >{page}</a></td>
    // })

    // console.log(pageBar);




    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th id="winery">Winery</th>
                            <th id="wine">Wine</th>
                            <th id="rating">Rating</th>
                            <th id="location">Location</th>
                            <th id="image">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wineTable}
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <tbody>
                        <td id="before"><button>&lt;</button></td>
                        {/* {pageBar} */}
                        <td id="after"><a>&gt;</a></td>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wines;