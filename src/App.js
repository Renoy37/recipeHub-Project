import "./App.css";
import Navbar from "./components/Navbar";
import Discover from './components/Discover';
import Home from "./components/Home";
import PostPage from "./PostPage";
import Footer from "./components/Footer";

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