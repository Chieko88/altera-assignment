import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <main className="container">
        <section>
          <h2>Welcome</h2>
          <p>This is the main content of my website.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
