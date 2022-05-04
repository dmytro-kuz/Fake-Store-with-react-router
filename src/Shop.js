import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const dataItems = await data.json()
        // console.log(dataItems.data);
        setItems(dataItems.data);
    }

    return (
        <div>
            {items.map(item => (
                <h2 key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>    
                </h2>
            ))}
        </div>
    )
}
