import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Discover from './components/Discover';
import Home from "./components/Home";
import PostPage from "./PostPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Discover />
      <PostPage/>
      <Footer />

    </div>
  );
}

export default App;