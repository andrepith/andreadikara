const LandingTop = () => {
  return (
    <div className="d-flex align-items-center landing-top" id="landing-top">
      <div className="container">
        <div className="landing-block">
          <h1 className="landing-title">
            Hey, I’m Andre - A Software <br />
            Engineer from Jakarta, Indonesia.
          </h1>
          <p className="mt-4">
            Front-End Developer based in Indonesia with passion to making
            complexed things simple for users. I love creating elegant and smart
            user-centered application which solve complex problems. I am also
            very passionate about simplicity and the psychology behind the
            design.
          </p>
          <a className="email-link mt-4" href="mailto:andrepith@yahoo.co.uk">
            andrepith@yahoo.co.uk
          </a>
          <a
            className="download-link mt-2 d-block"
            href="https://drive.google.com/file/d/1EDhmqNfGvwMeKWScVN7w-hH3RUsXVSh-/view"
            target="__blank"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingTop;
