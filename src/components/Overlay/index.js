import { XCircle } from "react-bootstrap-icons";

const Overlay = ({ isOpen, handleClose }) => {
  return (
    <div
      id="navOverlay"
      className={`nav-overlay ${isOpen ? "d-block" : "d-none"}`}
    >
      <span className="nav-close">
        <XCircle onClick={handleClose} />
      </span>
      <div className="overlay-content">
        <a href="https://github.com/andrepith" target="__blank">
          github
        </a>
        <a href="https://www.linkedin.com/in/andreadikara/" target="__blank">
          linkedin
        </a>
        <a href="mailto:andrepith@yahoo.co.uk">email</a>
      </div>
    </div>
  );
};

export default Overlay;
