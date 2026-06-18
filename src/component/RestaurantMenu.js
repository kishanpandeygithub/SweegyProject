import { useEffect, useState } from "react";
import { useParams } from "react-router"
import RestCard from "./RestCard";
export default function RestaurantMenu() {
    let { id } = useParams();

    const [RestData, setRestData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const ProxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const responce = await fetch(ProxyServer + swiggyAPI);
            const data = await responce.json();
            let tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULER?.cards;
            // const FilterData = tempData.filter((items)=>'title' in items?.card?.card);
            // setRestData(tempData);
            console.log(tempData);
        }
        fetchData();
    }, []);

    // console.log(RestData);

    return (
        <>
            <h1>Hello coder army</h1>
        </>
    )
}