import React from "react";
import { Link } from "react-router-dom";

const CatCard = ({ cat, onRefresh, index, onSaveOne }) => {
  const changeName = (name, index) => {
    dispatch(
      updateCat({
        index: index,
        newName: name,
      })
    );
  };

  return (
    <>
      <div className="card">
        <div className="p-3">
          <img
            src={cat.url}
            className="card-img-top border-radius img-fluid"
            alt="cat image"
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{cat.title}</h5>
        </div>
        <div className="card-footer">
          <i
            className="dislike fas fa-heart-broken fa-2xl hide mx-2"
            onClick={() => onRefresh(index)}
          ></i>

          <i
            className="like fa-solid fa-heart fa-2xl save mx-2"
            onClick={() => onSaveOne(cat, index)}
          ></i>
        </div>
      </div>
    </>
  );
};

export default CatCard;
