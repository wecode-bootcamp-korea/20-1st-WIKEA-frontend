import React from 'react';
import './Products.scss';

class Products extends React.Component {
  render() {
    // const { products } = this.props;

    return (
      <ul className="products">
        {/* product component가 merge되면 구현 예정입니다 */}

        {/* (arr.map(p => <li>p</li>)) */}

        {/* {product.map(item => (
          <Product
            name={item.name}
            category={item.category}
            price={item.price}
            isFavorite={item.isFavorite}
            rating={item.rating}
            img={item.img}
            classGrid="col-lg-3 col-md-4"
            key={item.id}
          >
            <input type="checkbox" />
          </Product>
        ))} */}
      </ul>
    );
  }
}

export default Products;
