import React from "react";
import { Route, Routes } from "react-router";
import CatList from "../views/CatList.jsx";
import CatLikes from "../views/CatLikes.jsx";


const MiRouter = () => {
    return ( 
        <Routes>
            <Route path="/" element={<CatList />} />
            <Route path="/likes" element={<CatLikes />} />
            <Route path="*" element={<CatList />} />
        </Routes>
    )
}

export default MiRouter