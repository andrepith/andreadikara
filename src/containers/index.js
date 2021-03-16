import NavBar from "../components/NavBar";
import LandingTop from "../components/LandingTop";
import Showcase from "../components/Showcase";
import Skillset from "../components/Skillset";

const Container = () => {
  return (
    <>
      <NavBar />
      <main className="wrapper">
        <LandingTop />
        <Showcase />
        <Skillset />
      </main>
    </>
  );
};

export default Container;
