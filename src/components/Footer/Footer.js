import React from 'react';
import { Link } from 'react-router-dom';
import FooterLine from './FooterLine/footerLine';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_signup">
          <h2>WIKEA Family</h2>
          <p>
            지금 WIKEA Family에 무료로 가입하고
            <br /> 다양한 맴버 전용 해택을 누리세요
            <Link className="family_signup" to="/">
              자세히 보기
            </Link>
          </p>
          <button>Wecode Family 가입하기</button>
        </div>
        <FooterLine />
      </footer>
    );
  }
}

export default Footer;
