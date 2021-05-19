import React from 'react';
import './ItemExplanation.scss';

class ItemExplanation extends React.Component {
  render() {
    return (
      <section className="item_explanation">
        <h1>탁상스탠드</h1>
        <p>
          탁상스탠드는 실용적이면서도 방안에 개성적인 느낌을 더해줄 수 있어용.
          거실에서 영화를 보는 밤에 더 아늑한 분위기를 연출하거나 침대 옆
          조명으로 활용하면 더 편안하게 잠들 수 있죠. 디자인이 다양한 만큼
          스타일도 다양해요. 머리 위의 조명을 껐을 때는 탁상스탠드를 켜보세요.
        </p>
      </section>
    );
  }
}

export default ItemExplanation;
