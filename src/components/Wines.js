import React, { useState, useEffect } from 'react';
import axios from '../../node_modules/axios/index';
import '../styles/Wines.css'

const Wines = () => {
    const [wines, setWines] = useState([]);
    const [error, setError] = useState(null);
    const kind = [
        {
            name: "reds",
            param: "/reds"
        },
        {
            name: "whites",
            param: "/whites"
        },
        {
            name: "sparkling",
            param: "/sparkling"
        },
        {
            name: "rose",
            param: "/rose"
        },
        {
            name: "desert",
            param: "/desert"
        },
        {
            name: "port",
            param: "/port"
        },
    ];

    useEffect(() => {
        async function fetch() {
            try {
                const response = await axios.get("https://api.sampleapis.com/wines" + kind[0].param);
                // console.log(response);
                setWines(response.data);    
            } catch (error) {
                setError(error);
            }
        }
        fetch();
    }, []);

    let wineName;
    if(error) {
        wineName = <h3>Error!</h3>
    } else {
        wineName = wines.map((wine) => {
            // console.log(wine.wine)
            
            return <tr>
                <td>{wine.winery}</td>
                <td>{wine.wine}</td>
                <td>{wine.rating.average}</td>
                <td>{wine.location}</td>
                <td><img src={wine.image}/></td>
            </tr>
        });
    }

    return (
        <div>
            <div>
                <b></b>
            </div>
            <table>
                <thead>
                    <th id="winery">Winery</th>
                    <th id="wine">Wine</th>
                    <th id="rating">Rating</th>
                    <th id="location">Location</th>
                    <th id="image">Image</th>
                </thead>
                <tbody>
                    {wineName}
                </tbody>
            </table>
        </div>
    );
};

export default Wines;