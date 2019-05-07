import React, {Component} from "react";

import Item from "./Item";
import Modal from "./Modal";
import {setToLocalStore, getFromLocalStore} from "../data/storageHelper";

import "./view.css";

import recipeData from "../data/data";
// import authUserData from "../data/authuser";

class RecipeList extends Component {

  componentDidMount() {
    let recipes = getFromLocalStore("recipies");
    if (recipes.length <= 0) {
      setToLocalStore("recipies", recipeData);
      this.props.addRecipeData(recipeData);
    }
    else {
      this.props.addRecipeData(recipes);
    }
    // this.props.addAuthUserData(authUserData);
  }

  handleModalCancel = () => {
    this.props.removeDeleteId(this.props.removeId);
  }

  removeItem = () => {
    let updatedRceipeList = this.props.recipes.filter((item) => {
      return item._id !== this.props.removeId
    });

    setToLocalStore("recipies", updatedRceipeList);
    this.props.addRecipeData(updatedRceipeList);
    this.handleModalCancel();
  }

  render() {
    return (
      <>
        <div className="row list-container">
          {this.props.recipes.map((item) => {
            return <div className="col-md-3" key={this.props._id}>
              <Item key={this.props._id}
                {...item}
                isLoggedIn={this.props.isLoggedIn}
                setDeleteId={this.props.setDeleteId}
                setEditId={this.props.setEditId}
                resetIngredients={this.props.resetIngredients}
                setRecipeItemId={this.props.setRecipeItemId} />
            </div>;
          })}
          {this.props.removeId && (
            <Modal onCancel={this.handleModalCancel} title="Remove Recipe">
              <div className="row">
                <div className="col-md-8"> Do you want to remove this item </div>
                <div className="col-md-2">
                  <button className="btn btn-outline-primary" type="button" onClick={this.removeItem}>
                    Remove
                  </button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </>
    );
  }
}

export default RecipeList;
