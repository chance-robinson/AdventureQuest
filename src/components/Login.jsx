import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login_Register.css";

const SuccessMessage = () => (
  <section className="success">
    <h1>You are logged in!</h1>
    <br />
    <p>
      <Link to="/">Go to Home</Link>
    </p>
  </section>
);

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser("");
    setPwd("");
    setSuccess(true);
    localStorage.setItem("user", JSON.stringify({ name: "chance" }));
    window.dispatchEvent(new Event("userLogin"));
  };

  return (
    <>
      {success ? (
        <SuccessMessage />
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button disabled={!user || !pwd}>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
