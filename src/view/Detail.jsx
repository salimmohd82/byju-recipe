import React from "react";
import {Link} from "react-router-dom";

import "./view.css";

const random = Math.random(0, 1000);

const Detail = (props) => {
  return (
    <div className="container product-detail pd-10" id="product-section">
      <div className="row">
        {/* image */}
        <div className="col-md-6">
          <img
            src={`https://lorempixel.com/525/420/food/?cb=${random}`}
            alt={props.item.name}
            className="image-responsive width100"
          />
        </div>
        {/* info */}
        <div className="col-md-6 text-left">
          <div className="row">
            <div className="col-md-12">
              <h1>{props.item.name}</h1>
              <div className="row pd-b10">
                <div className="col-md-12">
                  <span className="badge badge-primary">Chefs special</span>
                  <span className="monospaced">No. 1960140180</span>
                </div>
              </div>
              {/* review scetion */}
              <div className="row pd-b10">
                <div className="col-md-3 pd-r0">
                  <i className="fa fa-star gold" aria-hidden="true"></i>
                  <i className="fa fa-star gold" aria-hidden="true"></i>
                  <i className="fa fa-star gold" aria-hidden="true"></i>
                  <i className="fa fa-star gold" aria-hidden="true"></i>
                  <i className="fa fa-star empty" aria-hidden="true"></i>
                  <span className="label label-total-review">61</span>
                </div>
                <div className="col-md-4">
                  <span className="monospaced"><Link to="#review"> Write a Review</Link></span>
                </div>
              </div>
            </div>
          </div>
          {/* description */}
          <div className="row">
            <div className="col-md-12">
              <p className="description prod-desc">
                {props.item.desc}
              </p>
            </div>
          </div>
          {/* ingredients */}
          <div className="row">

            <div className="col-md-12">
              <h4>ingredients</h4>
              <ul className="list-unstyled">
                {props.item.ingredients.map((item, index) => (
                  <li key={index}>{item.name} {item.qty}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row pd-t20 text-left">
        <div className="col-md-12">
          <h4>Dummy Content</h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu justo, ornare in lectus a, porta semper ex. Integer id est mauris. Etiam convallis in quam non interdum. Cras at ipsum at justo blandit mattis eget nec erat. Mauris vestibulum libero porttitor molestie condimentum. Sed malesuada orci eu purus ullamcorper rhoncus. Proin nibh metus, porta sed justo in, auctor imperdiet magna. Quisque eu dolor quam. Donec vitae efficitur odio. Aenean quis mauris id erat fringilla sagittis. Fusce ut elementum sem, ut egestas odio. Pellentesque sit amet rhoncus nibh. Praesent eget magna risus. Aenean ullamcorper luctus sem, vel dignissim mi rutrum ac.</div>
      </div>
    </div >

  );
}

export default Detail;
