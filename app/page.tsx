"use client";

import { useState } from "react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  return (
    <div className="wrapper">
      <div className="container">
        {/* Rockstar Logo */}
        <div className="logo-wrap">
          <img src="/images/download.png" alt="Rockstar Games" className="logo" />
        </div>

        {/* Sign In Card */}
        <div className="card">
          <h1 className="title">Sign In</h1>

          <div className="field-group">
            <input
              type="email"
              placeholder="Email"
              className="input"
              autoComplete="email"
            />
          </div>

          <div className="field-group password-wrap">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input"
              autoComplete="current-password"
            />
            <button
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOpenIcon /> : <EyeOffIcon />}
            </button>
          </div>

          <div className="row">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                className="checkbox"
              />
              Keep me signed in
            </label>
          </div>

          <div className="actions">
            <a href="/forgot-password" className="forgot-link">
              Forgot your password?
            </a>
            <button className="sign-in-btn">Sign in</button>
          </div>
        </div>

        {/* Social Sign In Card */}
        <div className="card social-card">
          <span className="social-label">Sign in using</span>
          <div className="social-icons">
            <button className="social-btn" aria-label="Sign in with PlayStation">
              <img src="/images/np.png" alt="PlayStation" />
            </button>
            <button className="social-btn" aria-label="Sign in with Xbox">
              <img src="/images/xbl.png" alt="Xbox" />
            </button>
          </div>
        </div>

        <p className="create-account">
          Don&apos;t have a Rockstar Games account?{" "}
          <a href="/create-account" className="create-link">
            Create a new account
          </a>
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <span>© 2026 ROCKSTAR GAMES</span>
        <span className="sep">|</span>
        <a href="/privacy">PRIVACY POLICY</a>
        <span className="sep">|</span>
        <a href="/terms">TERMS OF SERVICE</a>
        <span className="sep">|</span>
        <button className="footer-btn">COOKIE SETTINGS</button>
      </footer>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .wrapper {
          min-height: 100vh;
          background-color: #111;
          background-image: url("/images/bg-repeat.png");
          background-repeat: repeat;
          background-size: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: "Arial", sans-serif;
          padding: 40px 0px 0px;
        }

        .container {
          width: 500px;
          max-width: 100%;
          padding-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo-wrap {
          margin-bottom: 20px;
        }

        .logo {
          padding-top: 95px;
          width: 101px;
          height: auto;
          display: block;
        }

        /* WHITE card */
        .card {
          background: #fff;
          width: 100%;
          max-width: 500px;
          padding: 20px;  
          margin: 10px 0px;
          border-radius: 0;
        }

        .title {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
          letter-spacing: -0.2px;
        }

        .field-group {
          position: relative;
          margin-bottom: 20px;
        }

        .input {
          width: 100%;
          min-height: 50px;
          padding: 0px 20px;
          border: 1px solid #ccc;
          border-radius: 0;
          font-size: 17px;
          color: #222;
          background: #fff;
          outline: none;
          transition: border-color 0.15s;
        }

        .input::placeholder {
          color: #aaa;
        }

        .input:focus {
          border-color:rgba(35, 125, 243, 0.81);
          border-width: 2px
        }

        .password-wrap .input {
          padding-right: 44px;
        }

        .eye-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #aaa;
          display: flex;
          align-items: center;
          padding: 0;
        }

        .eye-btn:hover {
          color: #555;
        }

        .row {
          margin: 14px 0 18px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #333;
          cursor: pointer;
          user-select: none;
        }

        .checkbox {
          width: 20px;
          height: 20px;
          accent-color: #f0a500;
          cursor: pointer;
        }

        .actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .forgot-link {
          font-size: 16px;
          color: #555;
          text-decoration: underline;
          cursor: pointer;
        }

        .forgot-link:hover {
          color: #111;
        }

        .sign-in-btn {
          background: #f0a500;
          color: #000000;
          border: none;
          padding: 7px 20px;
          font-size: 16px;
          font-weight: 700;
          border-radius: 2px;
          cursor: pointer;
          letter-spacing: 0.3px;
          transition: background 0.15s;
        }

        .sign-in-btn:hover {
          background:hsl(40, 100.00%, 42.50%);
        }

        /* Social card */
        .social-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          margin: 20p 0px;
          border-top: 1px solid #e5e5e5;
        }

        .social-label {
          font-size: 18px;
          color: #333;
        }

        .social-icons {
          display: flex;
          gap: 10px;
        }

        .social-btn {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          overflow: hidden;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          transition: transform 0.15s, opacity 0.15s;
        }

        .social-btn:hover {
          transform: scale(1.07);
          opacity: 0.9;
        }

        .social-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
          
        .create-account {
        border-bottom-left-radius:2px;
        border-bottom-right-radius:2px;
        border-top-left-radius:2px;
        border-top-right-radius:2px;
        box-sizing:border-box;
        color:rgb(255,255,255);
        display:block;
        font-family:-apple-system,BlinkMacSystemFont,Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
        font-size:16px;
        height:38px;
        margin-block-end:20px; 
        margin-block-start:20px;
        margin-bottom:20px;
        margin-inline-end:0px;
        margin-inline-start:0px;
        margin-left:0px;
        margin-right:0px;
        margin-top:20px;
        max-width:500px;
        padding-bottom:10px;
        padding-left:0px;
        padding-right:0px;
        padding-top:10px;
        text-align:center;
        text-size-adjust:100%;
        unicode-bidi:isolate;
        width:500px;
        }

        .create-link {
          color: #f0a500;
          text-decoration: none;
          font-weight: 500;
          text-decoration: underline;
        }

        .footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 0px 10px;
          font-size: 11px;
          color: #666;
          letter-spacing: 0.5px;
          margin-bottom:15px;       
           }

        .footer a,
        .footer-btn {
          color: #ffff;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 11px;
          letter-spacing: 0.5px;
          padding: 0;
        }

        .footer a:hover,
        .footer-btn:hover {
          color: #999;
        }

        .sep {
          color: #555;
        }
                  /* Tablet */
        @media (max-width: 768px) {
          .wrapper {
            padding: 20px 16px 100px;
          }
          .logo {
            padding-top: 60px;
            width: 90px;
          }
          .title {
            font-size: 20px;
          }
          .social-btn {
            width: 50px;
            height: 50px;
          }
        }
        /* Mobile */
        @media (max-width: 480px) {
          .wrapper {
            padding: 16px 12px 110px;
          }
          .container {
            padding-top: 20px;
          }
          .logo {
            padding-top: 40px;
            width: 80px;
          }
          .card {
            padding: 16px;
            margin: 8px 0;
          }
          .title {
            font-size: 18px;
            margin-bottom: 16px;
          }
          .input {
            min-height: 46px;
            padding: 0 14px;
            font-size: 16px;
          }
          .password-wrap .input {
            padding-right: 40px;
          }
          .actions {
            flex-direction: column-reverse;
            align-items: stretch;
            gap: 16px;
          }
          .sign-in-btn {
            width: 100%;
            padding: 14px 20px;
          }
          .forgot-link {
            text-align: center;
          }
          .social-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 12px;
          }
          .social-label {
            font-size: 16px;
          }
          .social-btn {
            width: 50px;
            height: 50px;
          }
          .create-account {
            font-size: 13px;
            padding: 10px 8px;
          }
          .footer {
            padding: 10px 12px;
            gap: 4px;
            font-size: 9px;
          }
          .footer a,
          .footer-btn {
            font-size: 9px;
          }
        }
        /* Extra small screens */
        @media (max-width: 360px) {
          .wrapper {
            padding: 12px 8px 120px;
          }
          .card {
            padding: 14px;
          }
          .input {
            min-height: 44px;
            font-size: 15px;
          }
          .footer {
            flex-direction: column;
            gap: 6px;
          }
          .sep {
            display: none;
          }
        }
          
      `}</style>
    </div>
  );
}

function EyeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function EyeOpenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}