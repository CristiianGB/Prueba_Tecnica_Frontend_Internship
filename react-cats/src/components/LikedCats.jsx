import React from "react";


const LikedCats = ({ cat, onDeleteCat }) => {

    return (
        <>
            <div className="column">
                <div className="photo">
                    <img className="likedPhoto img-fluid" src={cat.url} alt="cat picture" />
                </div>
                <div className="titleCats">
                    <strong>
                        {cat.title}
                    </strong>
                </div>
                <div className="deleteButton"><button className="hide button-53 my-2 " onClick={()=>onDeleteCat(cat)}>Eliminar</button></div>
            </div>

        </>
    )
}

export default LikedCats;