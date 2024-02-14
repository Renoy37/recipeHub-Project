import "./App.css";
import Navbar from "./components/Navbar";
import Discover from './components/Discover';
import Home from "./components/Home";
import PostPage from "./PostPage";

function App() {
return (
<div className="App">
<Navbar />
<Discover />
<Home />
<PostPage/>
</div>
);
}

export default App;