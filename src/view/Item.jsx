import React, {PureComponent} from "react";
import {Link} from "react-router-dom";

import "./view.css";

class Item extends PureComponent {

  setId = () => {
    this.props.setRecipeItemId(this.props._id);
  }

  setRemoveId = () => {
    this.props.setDeleteId(this.props._id);
  }

  setUpdateId = () => {
    this.props.setEditId(this.props._id);
    this.props.resetIngredients(this.props.ingredients);
  }

  render() {
    return (
      <div className="card card-width">
        <img className="card-img-top" src={`https://lorempixel.com/250/200/food/?cb=${this.props._id}`} alt={this.props.name} />
        <div className="card-body">
          <div className="card-height-wrap">
            <h5 className="card-title">{this.props.name}</h5>
            {this.props.isLoggedIn && (
              <div className="actions">
                <Link className="edit-icon" to="/update" onClick={this.setUpdateId} ><span className="fa fa-edit"></span></Link>
                <button className="delete-icon" onClick={this.setRemoveId}><span className="fa fa-trash-alt"></span></button>
              </div>
            )}
            <p className="card-text">{this.props.desc}</p>
          </div>
          <Link className="btn btn-primary" to="/detail" onClick={this.setId} > See full recipe </Link>
        </div>
      </div>
    );
  }
}

export default Item;
