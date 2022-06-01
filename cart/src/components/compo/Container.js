import React from "react";
import list from "../data/data";
import Card from "./Card";

const Container = ({ handleClick }) => {

  return (
    <div className="container">
      {list.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Container;
