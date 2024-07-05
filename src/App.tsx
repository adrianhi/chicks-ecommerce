import "./styles/App.css";

// Components
import ComboBox from "@components/ComboBox/ComboBox";
import Header from "@components/Header/Header.tsx";
import SearchBar from "@components/SearchBar/SearchBar";
import CardContainer from "@components/CardContainer/CardContainer";
import Box from "@components/Box/Box";

// SVG
import downArrowSvg from "@public/down-arrow.svg";
import feather from "@public/feather.svg";
import bag from "@public/money-bag.svg";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <main className="main-content">
          <div className="container">
            <h1 className="title-app">Condimentum consectetur</h1>
            <div className="top">
              <ComboBox icon={downArrowSvg} />
              <SearchBar />
              <div className="box-container">
                <Box title="price" text="All" icon={bag} />
                <Box title="Item Type" text="All" icon={feather} />
              </div>
            </div>
            <CardContainer />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
