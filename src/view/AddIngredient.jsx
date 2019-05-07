import React, {Component} from "react";

class Ingredient extends Component {

  addIngredient = (e) => {
    e.preventDefault();
    const updatedValue = {
      id: Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12),
      name: e.target.ingredientName.value,
      qty: e.target.ingredientQty.value
    };
    this.props.addIngredient([updatedValue]);
    this.props.onCancel();
  }

  render() {
    return (
      <form name="add-form" onSubmit={this.addIngredient}>
        <div className="row">
          <div className="col-md-8 offset-md-1">
            <label htmlFor="name">Ingredient Name</label>
            <input name="ingredientName" type="text" className="form-control" id="name" required
            />
          </div>
          <div className="col-md-8 offset-md-1">
            <label htmlFor="quantity">Quantity</label>
            <input name="ingredientQty" type="text" className="form-control" id="quantity" required
            />
          </div>
          <div className="col-md-8 offset-md-1 ingredient-submit">
            <button className="btn btn-outline-primary" type="submit">
              Add Ingredient
              </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Ingredient;
