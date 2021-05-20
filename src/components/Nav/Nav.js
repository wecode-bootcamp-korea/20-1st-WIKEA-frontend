import React from 'react';
import Message from './Message';
//최종 merge에 주석 풀기
// import MainNavModal from '../MainNavModal/MainNavModal';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      // isMainNavModalOn: false,
      scrollTop: 0,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = e => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
  };

  // handleMainNavModalOn = () => {
  //   this.setState({
  //     isMainNavModalOn: !this.state.isMainNavModalOn,
  //   });
  // };

  render() {
    const { scrollTop, isMainNavModalOn } = this.state;
    console.log(scrollTop);
    return (
      <div className={`nav_wrap ${scrollTop - NAV >= 0 && 'hide'}`}>
        <Message />
        <nav className="nav_menu" onScroll={this.handleScroll}>
          <h1 className="visually-hidden">메뉴바</h1>
          <img alt="logo" src="/images/logo.png" className="logo" />
          <div className="lg-only options">
            <a href="/">
              <span>모든제품</span>
            </a>
            <a href="/">
              <span>디지털 쇼룸</span>
            </a>
          </div>
          <ul className="nav-menu-group">
            <li>
              <a href="/">
                <i className="ic-cart1 lg-only" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="ic-user" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="ic-heart" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="ic-cart" />
              </a>
            </li>
            <li>
              <button className="col-lg-1" onClick={this.handleMainNavModalOn}>
                <i className="ic-menu" />
              </button>
            </li>
          </ul>
          <div className="searchBox">
            <i className="ic-search" />
            <input
              aria-label="제품 및 아이디어, 신제품 검색"
              placeholder="검색어 입력"
              type="search"
            />
            <button>
              <i className="ic-store" />
            </button>
          </div>
          {/* <MainNavModal
            sideModalOn={isMainNavModalOn}
            handleSideModalOn={this.handleMainNavModalOn}
          /> */}
        </nav>
      </div>
    );
  }
}

export default Nav;
const NAV = 132;
