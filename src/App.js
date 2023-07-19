import "./App.scss";
import Header from "../src/Components/Header/Header";
import Match from "./Pages/Match";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Match />
      <Footer />
    </div>
  );
};

export default App;
