import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";
import './App.css';

const App = () => {
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <main className="container">
        <section>
          <h2>Products</h2>
          <Catalog />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
