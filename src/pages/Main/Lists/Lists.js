import React from 'react';
import ItemExplanation from './ItemExplanation/ItemExplanation';
import ListBtn from './ListBtn/ListBtn';
import Products from './Products/Products';
import './Lists.scss';

class Lists extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      offset: 0,
      limit: 10,
      showMoreBar: 50,
    };
  }

  // Mock data 용 fetch입니다. 백엔드와 통신 이후 삭제 예정
  // componentDidMount() {
  //   fetch('http://localhost:3000/data/listmockdata.json')
  //     .then(product => product.json())
  //     .then(product => {
  //       this.setState({
  //         product,
  //       });
  //     });
  // }

  // pagination 구현 로직입니다. 백엔드와 통신 이후 주석 풀 예정
  // fetchProduct = () => {
  //   const { offset, limit, showMoreBar } = this.state;

  //   const nextLimit = limit + offset;
  //   fetch(
  //     `http://localhost:3000/data/listmockdata.json/products?offset=${offset}&limit=${nextOffset}`
  //   )
  //     .then(res => res.json())
  //     .then(product => this.setState({ product, limit: nextLimit, showMoreBar: 100 }));
  // };

  render() {
    const { products, showMoreBar } = this.state;

    return (
      <main className="grid-container">
        <div className="row">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-12 col-md-11">
            <ItemExplanation />
            <ListBtn />
            <Products products={products} />
            <div className="show_more">
              <div className="show_more_bar">
                <div
                  className="show_more_charge_half"
                  style={{ width: `${showMoreBar}%` }}
                ></div>
              </div>
              <button
                className="show_more_btn"
                type="button"
                // onClick={this.fetchProduct}
              >
                더보기
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Lists;
