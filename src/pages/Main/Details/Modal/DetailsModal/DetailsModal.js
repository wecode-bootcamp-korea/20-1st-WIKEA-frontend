import React, { Component } from 'react';
import Detail from './Detail';
import './DetailsModal.scss';

class DetailsModal extends Component {
  constructor() {
    super();
    this.state = {
      isCollapsed: false,
    };
  }

  showDetails = () => {
    const { isCollapsed } = this.state;
    this.setState({
      isCollapsed: !isCollapsed,
    });
  };

  render() {
    const { details } = this.props;
    const { isCollapsed } = this.state;
    return (
      <div className="product_details">
        <h2 className="product_details_title">제품 설명</h2>
        <div className="product_details_container">
          {details &&
            details[0].content
              .split('.')
              .slice(0, 2)
              .map((text, idx) => {
                return <span key={idx}>{text}</span>;
              })}
          <button className="more" onClick={this.showDetails}>
            더보기
          </button>
          <div className="optional_desc">
            {isCollapsed &&
              details[0].content
                .split('.')
                .slice(2)
                .map((text, idx) => {
                  return <span key={idx}>{text}</span>;
                })}
          </div>
        </div>
        <ul className="accordion">
          <Detail title={TITLE[0]}>
            {details[0].material &&
              details[0].material.split('\\r').map((text, idx) => {
                return <div key={idx}>{text}</div>;
              })}
          </Detail>
          <Detail title={TITLE[1]}>{details[0].recycling}</Detail>
          <Detail title={TITLE[2]}>
            {details &&
              details[0].package.split('\\r').map((text, idx) => {
                return <div key={idx}>{text}</div>;
              })}
          </Detail>
          <Detail title={TITLE[3]}>정보없음</Detail>
          <Detail title={TITLE[4]}>정보없음</Detail>
        </ul>
      </div>
    );
  }
}

export default DetailsModal;
const TITLE = [
  '소재 관리',
  '지속가능성 & 환경',
  '포장',
  '조립 및 문서',
  '고시정보',
];
