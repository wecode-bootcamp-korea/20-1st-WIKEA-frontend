import React, { Component } from 'react';
import URL from './imgData';
import './ImgSlider.scss';

class ImgSlider extends Component {
  constructor() {
    super();
    this.state = {
      imgRight: 0,
      imgUrl: [],
    };
  }

  componentDidMount() {
    this.setState({
      imgUrl: URL,
    });
  }

  //조건 : '이미지 개수 * W'로 나중에 수정하기!

  goNext = () => {
    const { imgRight } = this.state;
    if (imgRight > -2250) {
      this.setState({ imgRight: imgRight - W });
    }
  };

  goPrev = () => {
    const { imgRight } = this.state;
    if (imgRight < 0) {
      this.setState({ imgRight: imgRight + W });
    }
  };

  render() {
    const { imgRight } = this.state;
    return (
      <div className="carousel-container">
        <div
          className="carousel-slide"
          style={{ transform: `translateX(${imgRight}px)` }}
        >
          {URL.map((url, idx) => {
            return <img key={idx} alt="test" src={url} />;
          })}
        </div>
        <button onClick={this.goPrev} className="prevBtn">
          <i className="ic-chevron" />
        </button>
        <button onClick={this.goNext} className="nextBtn">
          <i className="ic-chevron" />
        </button>
      </div>
    );
  }
}

export default ImgSlider;

const W = 450;
