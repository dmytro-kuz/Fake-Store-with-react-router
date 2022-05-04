import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Item() {
  useEffect(() => {
    fetchItem();
  }, []);

    const [item, setItem] = useState({
        images: {}
    });
  const { id } = useParams();

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${{ id }.id}`
    );
    const item = await fetchItem.json();
    setItem(item.data.item);
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.images.icon} alt="" />
    </div>
  );
}
