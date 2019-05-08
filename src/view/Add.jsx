import React, {Component} from "react";
import {Redirect} from 'react-router';

import Modal from "./Modal";
import AddIngredient from "./AddIngredient";
import Ingredient from "./Ingredient";

import {setToLocalStore} from "../data/storageHelper";
import "./view.css";

class Add extends Component {

  static defaultProps = {
    item: {
      name: "",
      desc: ""
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      addIngredient: false,
      addItem: true,
      ingredient: {},
      name: this.props.item.name,
      desc: this.props.item.desc
    }
  }

  componentWillUnmount() {
    this.props.resetIngredients([]);
    this.props.setEditId("");
  }

  handleModalCancel = () => {
    this.setState({
      addIngredient: false
    })
  };

  addRecipe = (e) => {
    let newItems = this.props.recipes;
    e.preventDefault();
    const updatedValue = {
      _id: Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16),
      name: e.target.name.value,
      desc: e.target.desc.value,
      ingredients: this.props.ingredients
    };

    if (this.props.editId) {
      newItems = this.props.recipes.filter((item) => item._id !== this.props.editId);
    }

    newItems.push(updatedValue);
    this.props.addRecipeData(newItems);
    this.props.removeIngredients();
    setToLocalStore("recipies", newItems);
    this.setState({
      addItem: false
    })
  }

  openIngredientComponent = () => {
    this.setState({
      addIngredient: true
    })
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleDescChange = (e) => {
    this.setState({
      desc: e.target.value
    })
  }

  render() {
    if (!this.props.isLoggedIn || !this.state.addItem) {
      return <Redirect to="/" />
    }
    return (
      <div className="container add-container">
        <div className="row go-back"><i className="fa fa-arrow-left fa-4" onClick={this.props.history.goBack}></i></div>
        <form name="add-recipe-form" onSubmit={this.addRecipe}>
          <div className="row">
            <div className="col-md-12">
              <h3 className="add-recipe-heading">{this.props.editId ? "Edit" : "Add"} recipe</h3>
            </div>
            <div className="col-md-8">
              <div className="col-md-10 offset-md-1 pd-10">
                <input name="name" type="text" className="form-control" placeholder="Recipe Name" value={this.state.name} onChange={this.handleNameChange} required
                />
              </div>
              <div className="col-md-10 offset-md-1 pd-10">
                <textarea name="desc" className="md-textarea form-control" rows="3" value={this.state.desc} onChange={this.handleDescChange}></textarea>
              </div>
              <div className="col-md-10 offset-md-1 pd-10">
                <button className="btn btn-outline-primary" type="submit">
                  {this.props.editId ? "Update" : "Add"} Item
              </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="col-md-8 add-ingredients-btn">
                <div className="row">
                  <span className="pointer" onClick={this.openIngredientComponent}>
                    <i className="fa fa-plus"></i>&nbsp;Add Ingredients
                  </span>
                </div>
              </div>
              <div className="col-md-12 text-left">
                {this.props.ingredients && this.props.ingredients.map((item) => (
                  <Ingredient key={item.id}
                    {...item}
                    resetIngredients={this.props.resetIngredients}
                    ingredients={this.props.ingredients}
                  />
                ))}
              </div>
            </div>
          </div>
        </form>
        {
          this.state.addIngredient && (
            <Modal onCancel={this.handleModalCancel} title="Add new ingredient">
              <AddIngredient
                onCancel={this.handleModalCancel}
                addIngredient={this.props.addIngredient} />
            </Modal>
          )
        }
      </div >
    );
  }
}

export default Add;
