import "./scss/App.scss";
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Container from './components/Container'
import Events from "./components/Events";

function App() {
  return (
    <div className="wrapper">
      <div className="inner">
        <Header />
        <Breadcrumbs />
        <Events />
        <Container />
      </div>
    </div>
  );
}

export default App;
