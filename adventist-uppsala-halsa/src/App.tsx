import Styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import EightHealthKeysWrapper from './pages/EightHealthKeys/EightHealthKeysWrapper';
import Fuse from 'fuse.js';
import waterContent from "./content/healthKeys/water.json";
//import Dropdown from './components/Dropdown/Dropdown';
import AboutUsWrapper from './pages/AboutUs/AboutUsWrapper';
import NaturalMedicineWrapper from './pages/NaturalMedicine/NaturalMedicineWrapper';
import AbuseWrapper from './pages/Abuse/AbuseWrapper';
import NervousSystemHealthWrapper from './pages/NervousSystemHealth/NervousSystemHealthWrapper';
import HerbsForHumansWrapper from './pages/HerbsForHumans/HerbsForHumansWrapper';
import FirstAidKitWrapper from './pages/FirstAidKit/FirstAidKitWrapper';
import { Link, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { useEffect } from 'react';

function DisplayIndex() {
  useEffect(() => {
    document.title = "Uppsala Adventist Hälsa";
  }, []);

  return (
    <>
      <ul>
        <li><Link to={"/åtta-hälsonycklar"}>{"8 hälsonycklar"}</Link></li>
        <li><Link to="/vilka-är-vi">{"Vilka är vi?"}</Link></li>
        <li><Link to="/förkylning-och-naturlig-behandling">{"Förkylning & naturlig behandling"}</Link></li>
        <li><Link to="/missbruk">{"Beroenden"}</Link></li>
        <li><Link to="/hälsa-för-nervsystemet">{"Hälsa för nervsystemet"}</Link></li>
        <li><Link to="/örter-till-människans-tjänst">{"Örter till människans tjänst"}</Link></li>
        <li><Link to="/första-hjälpen-kit">{"1:a hjälpen kit"}</Link></li>
      </ul>
    </>
  )
};

function Display404() {
  useEffect(() => {
    document.title = "Sidofel 404";
  }, []);

  return(
    <>
      <h1>{"404"}</h1>
      <h1>{"Sidan kunde inte hittas"}</h1>
      <Link to="/">{"Klicka för att komma till startsidan"}</Link>
    </>
  )
};

const App = () => {
  type HealthKeyCardContent = {
  id: string;
  title: string;
  paragraphs: string[];
};
const allEightHealthContents: HealthKeyCardContent[] = [
  waterContent,
]
const fuse = new Fuse(allEightHealthContents, {
  keys: ['title', 'paragraphs'],
  includeMatches: true,
  threshold: 0.3
});
const results = fuse.search("vatten");

results.forEach(result => {
    console.log("fuse results");
    console.log(result.item.title);
    console.log(result.matches);
});

  return (
    <div className={Styles.AppContainer} data-testid="app-container">
      <header className={Styles.HeaderContainer} data-testid="header">
        <Header />
        <NavigationBar />
      </header>
      <main className={Styles.MainContainer}>
        <Routes>
          <Route index element={<DisplayIndex/>}/>
          <Route path="*" element={<Display404/>}/>
          <Route path="/åtta-hälsonycklar/*" element={<EightHealthKeysWrapper/>}/>
          <Route path="/vilka-är-vi/*" element={<AboutUsWrapper/>}/>
          <Route path="/förkylning-och-naturlig-behandling/*" element={<NaturalMedicineWrapper/>}/>
          <Route path="/missbruk/*" element={<AbuseWrapper/>}/>
          <Route path="/hälsa-för-nervsystemet/*" element={<NervousSystemHealthWrapper/>}/>
          <Route path="/örter-till-människans-tjänst/*" element={<HerbsForHumansWrapper/>}/>
          <Route path="/första-hjälpen-kit/*" element={<FirstAidKitWrapper/>}/>
        </Routes>
      </main>
      <footer className={Styles.FooterContainer} data-testid="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
