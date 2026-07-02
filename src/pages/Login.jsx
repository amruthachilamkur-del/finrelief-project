import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">

      {/* LEFT SIDE */}

      <div className="left-side">

        <div className="logo">

          <img
            src="https://img.icons8.com/fluency/96/chatbot.png"
            alt="AI Robot"
          />

          <h2>
            FinRelief <span>AI</span>
          </h2>

        </div>

        <div className="badge">
          🤖 AI Powered Financial Freedom
        </div>

        <div className="hero-text">

          <h1>
            Take Control of Your
            <br />

            <span>Financial Future</span>

          </h1>

          <p>
            AI-powered debt management that helps you negotiate
            smarter, settle faster, and achieve financial freedom.
          </p>

        </div>

        <div className="feature-cards">

          <div className="feature">

            <div className="icon">📈</div>

            <h3>40–75%</h3>

            <p>Settlement Range</p>

          </div>

          <div className="feature">

            <div className="icon">🤖</div>

            <h3>AI Powered</h3>

            <p>Smart Strategy</p>

          </div>

          <div className="feature">

            <div className="icon">🛡️</div>

            <h3>100% Free</h3>

            <p>To Get Started</p>

          </div>

        </div>

        <div className="footer-note">
          🔒 Your data is secure with bank-level encryption.
        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="right-side">

        <div className="login-card">

          <div className="welcome">

            <img
              src="https://img.icons8.com/fluency/48/chatbot.png"
              alt="Robot"
            />

            <h2>
              Welcome Back 👋
            </h2>

          </div>

          <p>
            Sign in to continue to FinRelief AI
          </p>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
          />

          <div className="remember">

            <label>

              <input type="checkbox" />

              Remember Me

            </label>

            <a href="/">
              Forgot Password?
            </a>

          </div>

          <Link to="/dashboard">

            <button className="signin-btn">
              Sign In →
            </button>

          </Link>

          <div className="divider">
            or continue with
          </div>

          <div className="social">

            <button>Google</button>

            <button>Apple</button>

            <button>Facebook</button>

          </div>

          <div className="register">

            Don't have an account?

            <span> Sign Up</span>

          </div>

        </div>

      </div>

    </div>
  );
}