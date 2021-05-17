import React from 'react';
import { withRouter } from 'react-router-dom';
import './ShoppingItem.scss';

class ShoppingItem extends React.Component {
  render() {
    return (
      <div className="shopping_item">
        <img
          className="shopping_bag_one_of_item_photo"
          alt="Table Lamp"
          src="/images/ShoppingBag/tableLamp.jpeg"
        />

        <div className="shopping_bag_one_of_item_info_container">
          <div className="shopping_bag_item_details_and_price">
            <div className="shopping_bag_item_details">
              <p className="shopping_bag_item_name_swedish">LAMPAN 람판</p>
              <p className="shopping_bag_item_name_and_color">
                탁상스탠드, 화이트
              </p>
              <p className="shopping_bag_item_size">29 cm</p>
            </div>
            <div className="shopping_bag_item_price">₩ 5,000</div>
          </div>

          <div className="shopping_bag_item_control_list">
            <div className="shopping_bag_item_select_container">
              <select
                name="shopping_bag_item_quantities"
                id="shopping_bag_item_quantities_select"
              >
                <option value="1" selected>
                  1
                </option>
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
