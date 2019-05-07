import React from "react";
import "./view.css";

const Ingredient = (props) => {

  const remove = () => {
    let modifiedData = props.ingredients.filter((item) => item.id !== props.id);
    props.resetIngredients(modifiedData);
  }

  return (
    <div className="row">
      <div className="col pd-10">
        <span>{props.name} - {props.qty} </span>&nbsp;&nbsp;<i className="fa fa-trash-alt pointer" onClick={remove} ></i>
      </div>
    </div>)
}

export default Ingredient;
