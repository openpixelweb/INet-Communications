
import React, { useEffect, useRef, useState } from "react";

const CustomerLoginArea = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    timerRef.current = setTimeout(() => {
      setLoading(false);
      setPassword("");
      setError("Incorrect email or password. Please try again.");
    }, 700);
  };

  return (
    <section className="inet-auth-page">
      <div className="inet-auth-container">
        <div className="inet-auth-card">

          {/* HEADING */}
          <div className="inet-auth-heading">
            <h1>
              Customer <span>Login</span>
            </h1>
            <p>Sign in to your account</p>
          </div>

          {/* LOGIN FORM */}
          <form
            className="inet-auth-form"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* EMAIL */}
            <div className="inet-auth-field">
              <label htmlFor="inet-auth-email">
                Email Address
              </label>

              <input
                id="inet-auth-email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="off"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                disabled={loading}
              />
            </div>

            {/* PASSWORD */}
            <div className="inet-auth-field">
              <label htmlFor="inet-auth-password">
                Password
              </label>

              <div className="inet-auth-password">
                <input
                  id="inet-auth-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  disabled={loading}
                />

                <button
                  type="button"
                  className="inet-auth-toggle"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  disabled={loading}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <div className="inet-auth-error" role="alert">
                <span aria-hidden="true">!</span>
                {error}
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="inet-auth-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="inet-auth-spinner" />
                  Checking...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

         

        </div>
      </div>
    </section>
  );
};

export default CustomerLoginArea;
