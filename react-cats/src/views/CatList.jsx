import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatCard from "../components/CatCard";
import { Link } from "react-router-dom";
import { addCat } from "../store/slices/catSlice";

const CatList = () => {
  const [cats, setCats] = useState([]);
  const dispatch = useDispatch();
  const catList = useSelector((state) => state.cat.catList);

  const catNames = useSelector((state) => state.cat.catNames);
  const randomIndex = Math.floor(Math.random() * catNames.length);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        data.map((cat) => {
          const newCat = { ...cat, title: catNames[randomIndex] };
          setCats([newCat]);
        });
      });
  }, []);


  const refresh = () => {
    setCats([
      {
        id: "loader",
        url: "https://cdn.dribbble.com/users/1459765/screenshots/3565900/loading_heart.gif",
      },
    ]);

    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        data.map((cat) => {
          const newCat = { ...cat, title: catNames[randomIndex] };
          setCats([newCat]);
        });
      });
  };

  const saveOne = (cat, index) => {
    const newCat = { ...cat};
    dispatch(addCat(newCat));
    refresh(index);
  };

  return (
    <>
    <main className="main">
      <h1 className="py-3 align-self-start">Cats:</h1>
      <Link to="/likes">
        <button className="button-53 mb-5 w-100">Likes</button>
      </Link>
        {cats.map((cat, index) => (
          <CatCard
            key={index}
            cat={cat}
            index={index}
            onSaveOne={saveOne}
            onRefresh={refresh}
          />
        ))}
      </main>
  
      <div className="cats">
        {catList.map((cat, index) => (
          <Link key={index} to="/likes">
            <button className="button-53 adoptedCat">{cat.title}</button>​
           
          </Link>
        ))}
      </div>
      
    </>
  );
};
export default CatList;
