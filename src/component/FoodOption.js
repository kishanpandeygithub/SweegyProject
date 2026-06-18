import {imageGridCards} from "../Utils/FoodData"
import FoodCart from "./FoodCart"
export default function FoodOption() {
    return (
        <>
            <div className="container mx-auto flex max-w-[80%] flex-wrap gap-3 ">
                {
                    imageGridCards.map((foodData ,index)=>{
                        return( <FoodCart key={foodData.id} foodData={foodData}></FoodCart>)
                    })
                }
            </div>
        </>
    )
}