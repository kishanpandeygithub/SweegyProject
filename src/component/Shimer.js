export default function Shimmer() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
        <>
            <div className="flex flex-wrap w-[90%] justify-evenly mx-auto mt-20 gap-3">
                {arr.map((vlaue) => {
                    return (
                        <div key={vlaue} className="max-w-[280px] mb-2 bg-gray-300 rounded-2xl transform transition duration-300 hover:scale-95" >
                            <img className="rounded-xl h-45 w-70 object-cover"></img>
                            <div className="w-[95%] mx-auto mt-3">
                                <div className="font-bold text-6 "></div>
                                <div className="flex items-center gap-2">

                                    <span className="text-6 font-bold "></span>
                                    <span className="text-m font-semibold ml-2"></span>
                                </div>
                                <div className="mt-1 overflow-hidden font-semibold h-7 "></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}