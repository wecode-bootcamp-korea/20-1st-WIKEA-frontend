import React from 'react';
import { withRouter } from 'react-router-dom';
import { API } from '../../../config';
import './SignIn.scss';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      type: 'password',
    };
  }

  handleIdPwInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = () => {
    fetch(API.SIGN_IN, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          localStorage.setItem('token', result.token);
          this.props.history.push('/');
        } else {
          alert('아이디나 비밀번호를 확인해주세요');
        }
      });
  };

  goToSignUp = () => {
    this.props.history.push('/signup');
  };

  showPassword = () => {
    const { type } = this.state;
    this.setState({
      type: type === 'password' ? 'text' : 'password',
    });
  };

  render() {
    const { idValue, pwValue, type } = this.state;
    const isValid =
      idValue.includes('@') && idValue.includes('.') && pwValue.length >= 8;

    return (
      <div className="sign_in">
        <i className="ic-close" onClick={this.goToSignUp} />
        <aside className="sign_in_aside">
          <header>
            <img
              className="wikea_logo"
              alt="WIKEA Logo"
              src="/images/Login/SignIn/wikeaLogo.jpeg"
            />
          </header>
          <article>
            <p className="login_title">로그인</p>
            <p className="login_description">
              외워야 할 비밀번호가 많아 불편하셨죠?
            </p>
            <p className="how_to_login_first">
              이제 일회용 코드를 이용하여 간편하게 로그인 하세요.
            </p>
            <p className="how_to_login_second">
              * 이메일 또는 휴대폰 번호 최초 인증 후 사용 가능
            </p>
          </article>
          <footer>
            <span className="homepage_address">IKEA.kr -</span>
            <span className="personal_info_policy">개인정보처리방침</span>
            <p className="copyright_notice">
              © Inter IKEA Systems B.V. 1999-2021
            </p>
          </footer>
        </aside>

        <div className="sign_in_main">
          <form>
            <div className="id_input_container">
              <div className="id_input_wrapper">
                <input
                  id="login_id"
                  type="text"
                  name="idValue"
                  onChange={this.handleIdPwInput}
                />
                <label htmlFor="login_id" className={idValue && 'typing'}>
                  이메일 또는 휴대폰 번호
                </label>
                <p
                  className={
                    idValue ? 'id_invalid_comment' : 'no_display_comment'
                  }
                >
                  유효한 이메일 또는 휴대폰 번호를 입력해주세요.
                </p>
              </div>
              <div>
                <span className="another_login_option">다른 로그인 옵션: </span>
                <span className="one_time_code_for_login">
                  일회용 코드로 로그인
                </span>
              </div>
            </div>
            <div className="pw_input_container">
              <div className="pw_input_wrapper">
                <input
                  id="login_password"
                  type={type}
                  name="pwValue"
                  onChange={this.handleIdPwInput}
                />
                <label htmlFor="login_password" className={pwValue && 'typing'}>
                  비밀번호
                </label>
                <i
                  className={`ic-lock ${pwValue ? '_show' : '_hide'}`}
                  onClick={this.showPassword}
                />
                <p
                  className={
                    pwValue ? 'pw_invalid_comment' : 'no_display_comment'
                  }
                >
                  비밀번호는 최소 8자 이상을 입력해야 합니다.
                </p>
              </div>
              <span className="finding_password">비밀번호 찾기</span>
            </div>
            <button
              type="button"
              className={`login_btn ${isValid ? 'activated' : 'deactivated'}`}
              disabled={!isValid}
              onClick={this.goToMain}
            >
              로그인
            </button>
            <button
              type="button"
              className="sign_up_btn"
              onClick={this.goToSignUp}
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
