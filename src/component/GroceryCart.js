export default function GroceryCart({ grocery }) {
    return (
        <div className="flex-none">
            <a href={grocery?.action?.link}>
                <img className="w-36 h-45 mt-20 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/` + grocery?.imageId}></img>
            </a>
            <h2 className="text-center font-bold">{grocery?.action?.text}</h2>
        </div>
    )
}