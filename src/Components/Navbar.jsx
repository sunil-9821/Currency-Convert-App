import React from "react";

function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary shadow"
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Currency Converter
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light"
                ? "Enable Dark mode"
                : "Enable light mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
