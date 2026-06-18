// first code contin the sweegy logo and hte header data like sign and etc 
//npte in the height w-40 in this number if number is 1 then it contain the 4 pixel
export default function Header() {
    return (
        <header className="bg-[#ff5200]">
            <div className="flex justify-between container mx-auto p-8">
                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
                <div className="text-white text-base font-bold flex gap-15 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/food/login">Partner with us</a>
                    <a className="border border-white py-3 px-4 rounded-xl" target="_blank" href="https://www.swiggy.com/corporate/">Get the App</a>
                    <a className="border bg-black border-white py-3 px-6  text-center rounded-xl" target="_blank" href="">Sign In</a>
                    <h1>Hello</h1>
                    <p>this is the testing</p>
                </div>
            </div>
            <div className="pt-16 pb-8 relative ">
                <img className="h-110 absolute top-0 left-0 " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-110 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="text-center text-5xl text-white font-bold max-w-[70%] mx-auto">
                    Order food & groceries. Discover <br />best restaurants. Swiggy it!
                </div>
                <div className="max-w-[60%] container mx-auto flex gap-10 mt-10 ">
                    <input className="bg-white w-[40%] text-base px-6 py-4 rounded-2xl" placeholder="Delhi ,India"></input>
                    <input className="bg-white w-[60%] text-base px-6 py-4 rounded-2xl" placeholder="Search for restaurant, item or more"></input>
                </div>
            </div>
            <div className="max-w-[80%] container mx-auto flex">
                <a href="http://localhost:1234/restaurant">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                </a>
            </div>
        </header>
    )
}