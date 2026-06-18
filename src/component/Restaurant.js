import { useEffect, useState } from "react"
import RestCard from "./RestCard";
import Shimmer from "./Shimer";

export default function Restaurant() {
    const [RestData, setRestData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const ProxyServer ="https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
            const responce = await fetch(ProxyServer+swiggyAPI);
            const data = await responce.json();
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();
    }, []);

    if(RestData.length==0){
        return <Shimmer></Shimmer>
    }
    // console.log(RestData);
    return (
        <div className="flex flex-wrap w-[90%] justify-evenly mx-auto mt-20 gap-3">
            {RestData.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>)}
        </div>
    )

}