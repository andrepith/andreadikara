const NavBar = () => {
  return (
    <div className="fixed-top navigation" id="navigation">
      <nav className="navbar navbar-expand-lg primary-nav container">
        <a aria-current="page" className="nav-item nav-link pl-0 mr-4" href="/">
          Andre Adikara
        </a>
        <div class="collapse navbar-collapse" id="navbar">
          <div class="navbar-nav align-items-center ml-auto">
            <a
              class="nav-item nav-link mr-4"
              href="https://github.com/andrepith"
              target="__blank"
            >
              github
            </a>
            <a
              class="nav-item nav-link mr-4"
              href="https://www.linkedin.com/in/andreadikara/"
              target="__blank"
            >
              linkedin
            </a>
            <a
              href="mailto:andrepith@yahoo.co.uk"
              class="btn btn-layered offset"
              role="button"
              aria-pressed="true"
            >
              hire me
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
