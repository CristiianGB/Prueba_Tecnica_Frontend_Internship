import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LikedCats from "../components/LikedCats";
import { deleteCat } from "../store/slices/catSlice";


const CatLikes = () => {
    const dispatch = useDispatch()
    const catList = useSelector(state=>state.cat.catList)
    
    const eraseCat =(cat)=>{
       dispatch(deleteCat(cat.id))
    }
    
    return ( 
        <div className="likedCatsMain">
            <h1 className="py-3">Your Cats:</h1>
            <Link to="/"><button className="button-53">Return to Match!</button></Link>
            <div className="likedCats">
                {catList.length ? catList.map((cat, index)=>
                <LikedCats key={index} cat={cat} onDeleteCat={eraseCat}/>)
            : <h1>Go and match with yor cat!</h1>
            } 
                
                
            </div>
        </div>
    )
}

export default CatLikes;