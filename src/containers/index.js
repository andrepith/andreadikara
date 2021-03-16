import NavBar from "../components/NavBar";
import LandingTop from "../components/LandingTop";
import Showcase from "../components/Showcase";

const Container = () => {
  return (
    <>
      <NavBar />
      <main className="wrapper">
        <LandingTop />
        <Showcase />
      </main>
    </>
  );
};

export default Container;
