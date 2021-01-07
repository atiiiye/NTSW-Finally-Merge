import React, { Component } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import "../css/login.css";


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        loadCaptchaEnginge(6);
    };

    // handleSubmit = () => {
    //     let user_captcha = document.getElementById('user_captcha_input').value;

    //     if (validateCaptcha(user_captcha)==true) {
    //         alert('Captcha Matched');
    //         loadCaptchaEnginge(6); 
    //         document.getElementById('user_captcha_input').value = "";
    //     }

    //     else {
    //         alert('Captcha Does Not Match');
    //         document.getElementById('user_captcha_input').value = "";
    //     }
    // }


    render() {
   
        return (
            <div className="login">
                <form className="wrapper">
                    <fieldset>
                        <div class="form-group">
                            <label >نام کاربری (کد ملی)</label>
                            <input type="text" name="username" class="form-control"  maxLength="10"/>
                        </div>
                        <div class="form-group" id="show-password">
                            <label >کلمه عبور</label>
                            <input type="password" name="password" class="form-control" />
                            <img src={process.env.PUBLIC_URL + './img/show-password.svg'} width="20" height="20" id="show-password-icon" />
                        </div>
                        <div class="form-group">
                        <label >تصویر امنیتی</label>
                            <input id="user_captcha_input" name="user_captcha_input" type="text" class="form-control"  />
                        </div>
                        <div className="login-captcha">
                            <LoadCanvasTemplate />
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control" >ورود</button>
                        </div>

                        <div class="reset-password">
                            <a href="#" class="reset-password">بازیابی رمز عبور</a>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Login;

