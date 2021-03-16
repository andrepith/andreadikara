import { data } from "./data";

const Showcase = () => {
  return (
    <div className="d-flex justify-content-start showcase" id="showcase">
      <div className="container">
        <h2 className="section-title">Showcase.</h2>
        <div className="row">
          {data.map((item, key) => (
            <div key={key} className="col-lg-6 col-sm-12 mt-3">
              <a href={item.link} target="__blank" className="showcase-card">
                <img
                  className="showcase-image image"
                  src={item.image}
                  alt={item.alt}
                />
                <div className="image-overlay">
                  <div className="image-overlay-text">
                    <p className="project-company mb-0">{item.name}</p>
                    <p className="project-title">{item.title}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
