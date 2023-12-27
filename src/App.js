import Banner from "./components/Banner";
import Content from "./components/Content";
import Header from "./components/Header";
import "./styles/Global.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content></Content>
    </div>
  );
}

export default App;
