import {connect} from "react-redux";

import Detail from "../view/Detail";

const getItem = (items, id) => {
  return items.find(item => item._id === id);
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
