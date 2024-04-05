import axios from "axios";
import { useState } from "react";
import Header from "./Components/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  // const [flag, setFlag] = useState(false);
  const [emailerror, setEmailerror] = useState("");

  async function submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (password.length < 8) {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      setEmailerror(err.response.status);
    }
  }

  return (
    <div>
      {" "}
      <Header />
      <div className="SignUp">
        <div className="register">
          <form onSubmit={submit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {accept && emailerror === 422 && (
              <p className="error">Email is already be taken</p>
            )}
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 8 && accept && (
              <p className="error">the password must be more than 8 chars</p>
            )}

            <div style={{ textAlign: "center" }}>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
