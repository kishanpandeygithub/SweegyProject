export default function DineCard({ Restdata }) {
    return (

        <div className="max-w-sm flex-none">
            <a href={Restdata?.cta?.link}>
                <div className="relative">
                    <img
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + Restdata?.info?.mediaFiles[0]?.url}
                        className="w-[326px] h-[289px] object-cover">
                    </img>
                    <p className="pl-4 pr-4 rounded-2xl bg-amber-50 absolute bottom-4 left-4 text-xl font-bold text-black">{Restdata?.info?.name}</p>
                    <p className="pl-4 pr-4 rounded-2xl bg-amber-50 absolute bottom-4 right-4 text-xl font-bold text-black">{Restdata?.info?.rating?.value}</p>
                </div>
            </a>
        </div>

    )
}