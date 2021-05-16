import React, { Component } from 'react';
import Star from '../../../../../components/Star/Star.js';
import './ItemDetails.scss';

class ItemDetails extends Component {
  render() {
    const { details } = this.props;

    return (
      <div className="item-details">
        <div className="item-summary">
          <span>제품 번호</span>
          <span>{details && details.number}</span>
        </div>
        <hr />
        <button className="item-information box">
          <span>제품 설명</span>
        </button>
        <hr />
        <button className="item-size box">
          <span>제품 크기</span>
        </button>
        <hr />
        <button className="item-rating box">
          <span>상품평</span>
          <Star />
        </button>
        <hr />
      </div>
    );
  }
}

export default ItemDetails;