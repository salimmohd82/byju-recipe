import {connect} from "react-redux";

import Detail from "../view/Detail";

const getItem = (items, id) => {
  // return items.find(item => item._id === id);
  return {
    "_id": "5c9e17581b2804c21c89f7b7",
    "name": "Fish Tacos Ultimo ",
    "desc": "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their d",
    "ingredients": [
      {
        "name": "item1",
        "qty": "2 units"
      },
      {
        "name": "item2",
        "qty": "2 units"
      },
      {
        "name": "item3",
        "qty": "2 units"
      },
      {
        "name": "item4",
        "qty": "2 units"
      },
      {
        "name": "item5",
        "qty": "2 units"
      }
    ]
  }
};

const mapStateToProps = ({recipe}) => {
  return {
    items: recipe.items,
    item: getItem(recipe.items, recipe.itemId)
  }
};

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
