import { data } from "./data";

const Skillset = () => {
  return (
    <div className="justify-content-start skillset" id="skillset">
      <div className="container">
        <h2 className="section-title text-center">Featured Skillset.</h2>
        <div className="logo-container mt-4">
          {data.map((item, key) => (
            <div className="logo-wrapper" key={key}>
              <img className="logo" src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillset;
