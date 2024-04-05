import { Link } from "react-router-dom";

export default function Header() {
  function handleLogOut() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <div className="container">
      <nav className="d-flex">
        <div className="d-flex">
          <h6>Home</h6>
          <h6>About</h6>
        </div>

        <div className="d-flex">
          {!window.localStorage.getItem("email") ? (
            <>
              <Link
                to="/register"
                style={{ textAlign: "center" }}
                className="register-nav"
              >
                Register
              </Link>
              <Link
                to="/login"
                style={{ textAlign: "center" }}
                className="register-nav"
              >
                Login
              </Link>
            </>
          ) : (
            <div className="register-nav" onClick={handleLogOut}>
              Logout
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
