import { Link } from "react-router"

export default function RestCard({ restInfo }) {
    return (
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
            <div className="max-w-[280px] mb-2 transform transition duration-300 hover:scale-95" >
                <img className="rounded-xl h-45 w-70 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/` + restInfo.info.cloudinaryImageId}></img>
                <div className="w-[95%] mx-auto mt-3">
                    <div className="font-bold text-6 ">{restInfo?.info?.name}</div>
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            className="w-5 h-5 fill-green-800"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.457a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.382-2.457a1 1 0 00-1.175 0l-3.382 2.457c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.098 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.235-3.967z" />
                        </svg>
                        <span className="text-6 font-bold ">{restInfo?.info?.avgRating}</span>
                        <span className="text-m font-semibold ml-2">{restInfo?.info?.sla?.slaString}</span>
                    </div>
                    <div className="mt-1 overflow-hidden font-semibold h-7 ">{restInfo?.info?.cuisines?.join(" ")}</div>
                </div>
            </div>
        </Link>
    )
}