import { Grocery } from "../Utils/Grocery.js"
import GroceryCart from "./GroceryCart.js"
export default function GroceryOption() {
    return (
        <>
            <div className="mt-20 w-[80%] container mx-auto">
                <h1 className="text-2xl font-bold">Shop Groceries On Instamart</h1>
                <div className="container mx-auto flex  flex-nowrap overflow-x-auto gap-4 mt-5 ">
                    {
                        Grocery.map((grocery, index) => {
                            return (<GroceryCart key={grocery.id} grocery={grocery}></GroceryCart>)
                        })
                    }
                </div>
            </div>
        </>
    )
}