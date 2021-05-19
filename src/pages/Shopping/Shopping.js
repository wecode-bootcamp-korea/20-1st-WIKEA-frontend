import React, { Component } from 'react';
import ShoppingItem from './components/ShoppingItem/ShoppingItem';
import './Shopping.scss';

class Shopping extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch('/data/shoppingData.json')
      .then(response => response.json())
      .then(product => {
        this.setState({
          productList: product,
        });
      });
  }

  render() {
    const { productList } = this.state;

    return (
      <main className="shopping">
        <div className="grid-container">
          <div className="row">
            <div className="col-lg-1 lg-only"></div>
            <div className="col-sm-4 col-md-8 col-lg-8 ">
              <article>
                <header>
                  <h1>장바구니</h1>
                  <button>...</button>
                </header>
                <div>
                  {productList.map(product => (
                    <ShoppingItem key={product.id} product={product} />
                  ))}
                </div>
              </article>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 ">
              <section className="order_summary">
                <h2>주문 내역</h2>
                <dl>
                  <dt>전체 서비스 내용</dt>
                  <dd>
                    이 금액에는 배송비가 포함되어 있지 않으며, 배송지에 따라
                    구매가 불가할 수 있습니다
                  </dd>
                </dl>
                <hr />
                <dl className="order_price">
                  <dt>총 주문금액</dt>
                  <dd>₩ 390,660</dd>
                </dl>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1 lg-only" />
            <div className="col-lg-12"></div>
          </div>
        </div>
      </main>
    );
  }
}
export default Shopping;
