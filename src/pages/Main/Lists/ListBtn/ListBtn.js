import React from 'react';
import Sortbox from './Sortbox/Sortbox';
// import SideModal from './SideModal/SideModal';
// import SortModal from './SideModal/FilterModal';
import './ListBtn.scss';

class ListBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      sortbox: false,
      sideModal: false,
    };
  }

  handlebox = e => {
    const value = e.currentTarget.name;

    this.setState({
      [value]: !this.state[value],
    });
  };

  render() {
    const { sortbox } = this.state;

    return (
      <div className="btn_line">
        <div className="btn_container">
          <button aria-label="제품 비교 선택 활성화">
            <span>비교</span>
          </button>
          <button
            className={sortbox && 'visible'}
            aria-label="분류 옵션보기"
            onClick={this.handlebox}
            name="sortbox"
          >
            <span>
              정렬
              <i className="ic-caret" />
            </span>
          </button>
          <button aria-label="필터 모달 표시 가격">
            <span>가격</span>
          </button>
          <button aria-label="온라인 구매 가능 필터 이름별로 제품 필터링">
            <span>온라인 구매 가능</span>
          </button>
          <button aria-label="필터 모달 표시 색상">
            <span>색상</span>
          </button>
          <button aria-label="필터 모달 표시 사이즈">
            <span>사이즈</span>
          </button>
          <button aria-label="필터 모달 표시 고객 평가">
            <span>고객 평가</span>
          </button>
          <button
            aria-label="필터 모달 더보기, 더 지속 가능한 소재, 특가, 신재품, 시리즈"
            onClick={this.handlebox}
            name="sideModal"
          >
            <span>
              모든 필터
              <i className="ic-menu" />
            </span>
          </button>
        </div>
        <div className="product_btn">
          <span className="product_count">61개</span>
          <span className="product_btn_product">제품</span>
          <span className="product_btn_showroom">디지털 쇼룸</span>
        </div>
        {sortbox && <Sortbox />}
        {/* sideModal merge시 활성화 예정입니다 */}
        {/* <SideModal on={sideModal} direction="right">
          <SortModal />
        </SideModal> */}
      </div>
    );
  }
}
export default ListBtn;
