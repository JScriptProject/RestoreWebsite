import React from "react";
import "../login.css";
import google_logo from '../assets/logo-google.png';

function Login({closeLogin}) {
  return (
    <div className="login-section">
      <div className="login-section-wrapper">
        <div className="logo-login">
          <img src="/src/assets/logo.avif" alt="logo" />
        </div>
        <div className="login-form-wrapper">
          <h2>Login</h2>
          <form>
            <div className="form-content">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-content">
              <label>Password</label>
              <input type="text" required />
            </div>
            <div className="check-box">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>

            <div className="login-btn-section">
              <button className="login-btn-loginform">Login</button>
              <span>Forgot your passord?</span>
            </div>
          </form>
          <div className="login-via">
            <span>Or Login Via</span>
          </div>
          <button className="google-btn">
            
              <img src={google_logo} alt="google" />
              <span>
              Google
            </span>
          </button>
          <div className="register-link">
            <span>Don't have an account?</span>
            <p>Register now</p>
          </div>
        </div>
        <div className="back-to-home" onClick={closeLogin}>Back to HomePage</div>
      </div>
    </div>
  );
}

export default Login;
