import React from 'react';
import { withRouter } from 'react-router-dom';
import './ShoppingItem.scss';

class ShoppingItem extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="shopping_item">
        <img
          className="shopping_bag_one_of_item_photo"
          alt={product.english_name}
          src={product.url}
        />
        <div className="shopping_bag_one_of_item_info_container">
          <div className="shopping_bag_item_details_and_price">
            <div className="shopping_bag_item_details">
              <p className="shopping_bag_item_name_swedish">
                {product.english_name} {product.korean_name}
              </p>
              <p className="shopping_bag_item_name_and_color">
                {product.sub_category}
              </p>
            </div>
            <div className="shopping_bag_item_price">{product.price}</div>
          </div>
          <div className="shopping_bag_item_control_list">
            <div className="shopping_bag_item_select_container">
              <select
                name="itemCount"
                className="shopping_bag_item_quantities_select"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <span className="shopping_bag_item_delete">삭제</span>
            <span className="shopping_bag_item_wish_list_save">
              위시리스트 저장
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ShoppingItem);
