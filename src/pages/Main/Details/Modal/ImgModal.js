import React, { Component } from 'react';
import './ImgModal.scss';

class ImgModal extends Component {
  render() {
    const { handleModal } = this.props;
    return (
      <div className="modal">
        <div className="modal_back">
          <img
            alt="상세 이미지"
            src="https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m"
          />
          <button onClick={this.handleModal} className="modal_btn" />
        </div>
      </div>
    );
  }
}

export default ImgModal;
