import React, { useState, useEffect } from 'react';
import axios from '../../node_modules/axios/index';
import '../styles/Wines.css'

const Wines = () => {
    const [wines, setWines] = useState([]);
    const [error, setError] = useState(null);
    const [kind, setKind] = useState(["reds", "whites", "sparkling", "rose", "desert", "port"]);
    const [page, setPage] = useState();
    const [count, setCount] = useState();
    const [total, setTotal] = useState();

    // ?key1=value1&key2=value2
    // ? 삭제하고 시작.
    // &구분자로 나누기. key1=value2, key2=value2
    // 나눈거로 map 돌려서 =구분자로 나누고 data[0]:data[1] 형태로 만들기.
    // data = {key1:value1, key2:value2}


    useEffect(() => {
        async function fetchData() {
            // setWines([]);
            try {
                const response = await axios.get("http://192.168.148.38:8000/wines/" + kind[0]);
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
    }, []);


    let wineTable;
    let pages = [];

    if (error == null) {
        wineTable = wines.map((wine) => {
            return <tr key={wine.wine}>
                <td id="winery" key={wine.winery}>{wine.winery}</td>
                <td id="wine" key={wine.wine}>{wine.wine}</td>
                <td id="rating" key={wine.rating.average}>{wine.rating.average}</td>
                <td id="location" key={wine.location}>{wine.location}</td>
                <td id="image" key={wine.image}><img src={wine.image} alt={wine.image} /></td>
            </tr>
        });

    }

    let maxPage = (Math.ceil(page / count) * count);
    let minPage = maxPage - count + 1
    if(maxPage >= total) maxPage = total
    for (let i = minPage; i <= maxPage; i++) {
        pages.push(i);
    }

    let pageBar = pages.map((page) => {
        return <td id="page"><a href>{page}</a></td>
    })

    console.log(pageBar);




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
                        <td id="before">&lt;</td>
                        {pageBar}
                        <td id="after">&gt;</td>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wines;