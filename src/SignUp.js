import axios from "axios";
import { useState } from "react";
import Header from "./Components/Header";
import { months } from "./month";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [gender, setGender] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [phone, setPhone] = useState("");
  const [emailerror, setEmailerror] = useState("");

  async function submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (name === "" || password.length < 8 || password !== cpassword) {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: cpassword,
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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name === "" && accept && (
              <p className="error">Username is required</p>
            )}
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
            <label htmlFor="Phone">Phone number</label>
            <input
              type="number"
              id="Phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
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
            <label htmlFor="confirmpassword">confirm password</label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="confirmpassword"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
            {password !== cpassword && accept && (
              <p className="error">The password does not match </p>
            )}
            {/*BPR */}
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              required
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label htmlFor="birthday"> Birthday:</label>
            <select id="birthday" value={day} required>
              <option value="">Day</option>
              {/* Add options for days */}
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select value={month} required>
              {months.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
            <input
              style={{
                border: "1px solid rgba(0, 0, 0, 0.4)",
                width: "200px",
                borderRadius: "2px",
              }}
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
              required
            />
            <div style={{ textAlign: "center" }}>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
