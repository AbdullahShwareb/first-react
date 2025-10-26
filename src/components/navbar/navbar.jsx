import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navDark}`}>
      <div className="container">
        <a className="navbar-brand fw-bold text-uppercase" href="#">
          Start Bootstrap
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-uppercase fw-bold">
            <li className="nav-item">
              <a className={`nav-link ${styles.active}`} href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
