import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import JoinTheClub from "./components/joinTheClub/JoinTheClub";
import NewCeramics from "./components/newCeramics/NewCeramics";
import OurPopular from "./components/ourPopular/OurPopular";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionTwo from "./components/sectionTwo/SectionTwo";

function App() {
  return (
    <>
    <Header />
    <SectionOne />
    <SectionTwo />
    <NewCeramics />
    <OurPopular/>
    <JoinTheClub />
    <SectionThree />
    <Footer />
    </>
  );
}

export default App;
